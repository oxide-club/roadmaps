import { readFile, readdir, lstat } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import Ajv from "ajv";
import { parse } from "yaml";

const schema = JSON.parse(
  await readFile(new URL("../roadmap.schema.json", import.meta.url), "utf8"),
);
const check = new Ajv({ allErrors: true }).compile(schema);
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function validateRoadmap(data, { id }) {
  const fail = (message) => {
    throw new Error(`${id}/index.md: ${message}`);
  };
  if (
    !slug.test(id) ||
    ["templates", "docs", "scripts", "tests", "licenses"].includes(id)
  )
    fail("Identificador inválido");
  if (!check(data)) fail(JSON.stringify(check.errors));
  for (const key of ["publishedAt", "updatedAt"]) {
    const date = data[key];
    if (
      date &&
      (Number.isNaN(Date.parse(date)) ||
        new Date(date).toISOString().slice(0, 10) !== date)
    )
      fail(`Data inválida em ${key}`);
  }
  const refs = new Set(data.nodes.map((n) => n.ref));
  if (refs.size !== data.nodes.length) fail("Referência de nó repetida");
  const listed = (items, field) => {
    if (
      new Set(items).size !== items.length ||
      items.some((ref) => !refs.has(ref))
    )
      fail(`Referências inválidas em ${field}`);
  };
  const pairs = new Set();
  const adjacency = new Map([...refs].map((ref) => [ref, []]));
  for (const edge of data.edges) {
    if (!refs.has(edge.from) || !refs.has(edge.to) || edge.from === edge.to)
      fail("Aresta inválida ou autorreferente");
    const pair = `${edge.from}>${edge.to}`;
    if (pairs.has(pair)) fail("Aresta repetida");
    pairs.add(pair);
    adjacency.get(edge.from).push(edge.to);
  }
  const active = new Set(),
    visited = new Set();
  function visit(ref) {
    if (active.has(ref)) fail("Ciclo nas relações");
    if (visited.has(ref)) return;
    active.add(ref);
    for (const next of adjacency.get(ref)) visit(next);
    active.delete(ref);
    visited.add(ref);
  }
  for (const ref of refs) visit(ref);
  for (const [field, items] of Object.entries(data.layout ?? {}))
    listed(items, `layout.${field}`);
  const primary = data.layout?.primaryPath ?? [];
  for (let i = 1; i < primary.length; i++)
    if (
      !data.edges.some(
        (e) =>
          e.from === primary[i - 1] &&
          e.to === primary[i] &&
          e.type !== "suggested_preparation",
      )
    )
      fail("Percurso principal sem aresta de progressão");
  for (const group of data.groups ?? [])
    listed(group.nodes, `groups.${group.title}`);
  return data;
}

export async function loadRoadmaps(directory) {
  if (directory instanceof URL) directory = fileURLToPath(directory);
  const source = await lstat(directory);
  if (!source.isDirectory() || source.isSymbolicLink())
    throw new Error("A fonte deve ser um diretório regular");
  const entries = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (
      entry.name.startsWith(".") ||
      [
        "templates",
        "docs",
        "scripts",
        "tests",
        "licenses",
        "node_modules",
      ].includes(entry.name)
    )
      continue;
    if (entry.isSymbolicLink())
      throw new Error(`Link simbólico não permitido: ${entry.name}`);
    if (!entry.isDirectory()) continue;
    const file = join(directory, entry.name, "index.md");
    const stat = await lstat(file);
    if (!stat.isFile() || stat.isSymbolicLink())
      throw new Error(`Arquivo não regular: ${file}`);
    const body = await readFile(file, "utf8");
    const match = body.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!match) throw new Error(`Frontmatter ausente: ${file}`);
    entries.push({
      id: entry.name,
      data: validateRoadmap(parse(match[1]), { id: entry.name }),
      body: body.slice(match[0].length),
    });
  }
  for (const entry of entries)
    for (const node of entry.data.nodes) {
      if (
        node.relatedRoadmap &&
        !entries.some((e) => e.id === node.relatedRoadmap && !e.data.draft)
      )
        throw new Error(
          `${entry.id}: trilha relacionada inexistente ou em rascunho: ${node.relatedRoadmap}`,
        );
    }
  return entries;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    const entries = await loadRoadmaps(resolve(process.argv[2] ?? "."));
    console.log(`${entries.length} trilhas validadas.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
