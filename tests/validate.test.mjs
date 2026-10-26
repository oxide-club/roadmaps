import { test } from "node:test";
import assert from "node:assert/strict";
import { validateRoadmap } from "../scripts/validate.mjs";
export const fixture = () => ({
  version: 1,
  title: "Representação de dados",
  summary: "Investigue representações.",
  question: "Como representar dados?",
  audience: "Pessoas com programação básica.",
  prerequisites: ["Funções e arrays"],
  learningGoals: ["Explicar representações"],
  draft: false,
  publishedAt: "2026-10-25",
  order: 0,
  nodes: [{ ref: "notes:representacao-binaria" }],
  edges: [],
});
test("a published roadmap can contain only a note without numeric ID or difficulty", () => {
  const data = fixture();
  assert.equal(
    validateRoadmap(data, { id: "representacoes" }).nodes[0].ref,
    "notes:representacao-binaria",
  );
});
test("independent paths do not require invented edges", () => {
  const data = fixture();
  data.nodes.push({ ref: "labs:001-binary-lab" });
  assert.equal(validateRoadmap(data, { id: "representacoes" }).edges.length, 0);
});
for (const [name, mutate] of [
  [
    "unknown namespace",
    (d) => {
      d.nodes[0].ref = "videos:one";
    },
  ],
  [
    "unsafe identifier",
    (d) => {
      d.nodes[0].ref = "notes:../secret";
    },
  ],
  [
    "reserved note identifier",
    (d) => {
      d.nodes[0].ref = "notes:templates";
    },
  ],
  [
    "duplicate node",
    (d) => {
      d.nodes.push({ ...d.nodes[0] });
    },
  ],
  [
    "self edge",
    (d) => {
      d.edges.push({
        from: d.nodes[0].ref,
        to: d.nodes[0].ref,
        type: "branch",
      });
    },
  ],
  [
    "missing destination",
    (d) => {
      d.edges.push({
        from: d.nodes[0].ref,
        to: "labs:001-binary-lab",
        type: "branch",
      });
    },
  ],
  [
    "invalid date",
    (d) => {
      d.publishedAt = "2026-02-30";
    },
  ],
  [
    "missing publication date",
    (d) => {
      delete d.publishedAt;
    },
  ],
  [
    "canonical metadata override",
    (d) => {
      d.nodes[0].title = "Duplicate title";
    },
  ],
  [
    "unknown layout reference",
    (d) => {
      d.layout = { branchOrder: ["notes:missing"] };
    },
  ],
  [
    "unknown group reference",
    (d) => {
      d.groups = [{ title: "Caminho A", nodes: ["notes:missing"] }];
    },
  ],
  [
    "cycle including preparation",
    (d) => {
      d.nodes.push({ ref: "labs:001-binary-lab" });
      d.edges = [
        { from: d.nodes[0].ref, to: d.nodes[1].ref, type: "branch" },
        {
          from: d.nodes[1].ref,
          to: d.nodes[0].ref,
          type: "suggested_preparation",
        },
      ];
    },
  ],
  [
    "primary path without progression edge",
    (d) => {
      d.nodes.push({ ref: "labs:001-binary-lab" });
      d.layout = { primaryPath: d.nodes.map((n) => n.ref) };
    },
  ],
  [
    "duplicate edges",
    (d) => {
      d.nodes.push({ ref: "labs:001-binary-lab" });
      const e = { from: d.nodes[0].ref, to: d.nodes[1].ref, type: "branch" };
      d.edges = [e, { ...e }];
    },
  ],
])
  test(`rejects ${name}`, () => {
    const data = fixture();
    mutate(data);
    assert.throws(
      () => validateRoadmap(data, { id: "representacoes" }),
      /representacoes/,
    );
  });
test("drafts may omit publication date while their graph is still validated", () => {
  const d = fixture();
  d.draft = true;
  delete d.publishedAt;
  assert.equal(validateRoadmap(d, { id: "representacoes" }).draft, true);
});
