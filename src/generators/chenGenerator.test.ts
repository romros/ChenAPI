import { getConceptualModel } from "../generators/chenGenerator";
import * as fs from "fs";
import * as path from "path";

// Funció per carregar fixtures
function loadFixture(filename: string) {
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "__tests__",
    "fixtures",
    filename
  );
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

test("generate chen", async () => {
  // Prova
  const testPrompt =
    "Dissenya una base de dades per a una universitat amb estudiants, cursos i instructors. Cada estudiant té un nom, ID i cursos matriculats. Cada curs té un ID, títol i instructor.";

  // genera un test expect(result).toBeDefined();
  // usant getConceptualModel
  const result = await getConceptualModel(testPrompt).then((model) => {
    console.log("Conceptual Model:", model);
  });

  expect(result).toBeDefined();
}, 10000);
