import { generateDotFromJson } from "../generators/dotGenerator";
import { dotToSvg } from "../generators/graphUtils";
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

test("generate dot from example1", async () => {
  const exampleData = loadFixture("example1.json");
  const resultDot = generateDotFromJson(exampleData);

  const [dotPath, svgPath] = await dotToSvg(
    resultDot,
    path.join(__dirname, "..", "..", "static", "generated_svgs"),
    "example1"
  );

  expect(fs.existsSync(dotPath)).toBe(true);
  expect(fs.existsSync(svgPath)).toBe(true);
});

test("generate dot from example2", async () => {
  const exampleData = loadFixture("example2.json");
  const resultDot = generateDotFromJson(exampleData);

  const [dotPath, svgPath] = await dotToSvg(
    resultDot,
    path.join(__dirname, "..", "..", "static", "generated_svgs"),
    "example2"
  );

  expect(fs.existsSync(dotPath)).toBe(true);
  expect(fs.existsSync(svgPath)).toBe(true);
});
