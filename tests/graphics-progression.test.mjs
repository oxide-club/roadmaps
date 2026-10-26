import { test } from "node:test";
import assert from "node:assert/strict";
import { loadRoadmaps } from "../scripts/validate.mjs";
test("the graphics main path is presented as progression rather than optional branches", async () => {
  const entries = await loadRoadmaps(new URL("..", import.meta.url));
  const graphics = entries.find(
    (e) => e.id === "computacao-grafica-e-rasterizacao",
  );
  assert.deepEqual(
    graphics.data.edges.slice(0, 3).map((e) => [e.from, e.to, e.type]),
    [
      ["challenges:002-ppm", "challenges:007-image-bug", "recommended_next"],
      [
        "challenges:007-image-bug",
        "challenges:008-image-transform",
        "recommended_next",
      ],
      [
        "challenges:008-image-transform",
        "challenges:009-triangle",
        "recommended_next",
      ],
    ],
  );
});
