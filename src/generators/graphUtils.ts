import { promises as fs } from "fs";
import path from "path";
import { digraph, Node, Edge, toDot } from "ts-graphviz";
import { toFile } from "ts-graphviz/adapter";

/**
 * Convert a DOT string to an SVG file.
 *
 * @param dotString The input DOT string.
 * @param outputDirectory The directory where the files will be saved.
 * @param outputFilename Name of the output files (default is "graph").
 * @returns Paths to the generated DOT and SVG files.
 */
export async function dotToSvg(
  dotString: string,
  outputDirectory: string,
  outputFilename: string = "graph"
): Promise<[string, string]> {
  // Crea un graf (Digraph) utilitzant ts-graphviz
  const G = digraph();

  // Converteix el graf a un string DOT
  const dotGraph = `${dotString}\n${toDot(G)}`;

  // Define el fitxer de sortida SVG
  const svgFile = path.join(outputDirectory, `${outputFilename}.svg`);

  // Define el fitxer de sortida DOT
  const dotFile = path.join(outputDirectory, `${outputFilename}.dot`);

  // Guarda el contingut del graf com a fitxer DOT
  await fs.writeFile(dotFile, dotGraph);

  // Utilitza la funció toFile de ts-graphviz per convertir el DOT a SVG i guardar-lo com a fitxer SVG
  await toFile(dotGraph, svgFile, { format: "svg" });

  return [dotFile, svgFile];
}
