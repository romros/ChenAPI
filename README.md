# Generador de DOT a SVG

Aquest projecte és un generador de gràfics SVG a partir de fitxers DOT, utilitzant la llibreria ts-graphviz.

## Descripció

Aquest projecte consisteix en una eina que permet convertir fitxers en format DOT (Graphviz) en fitxers SVG mitjançant la llibreria ts-graphviz. La conversió es realitza mitjançant una sèrie de passos, incloent la lectura del fitxer DOT, la generació del gràfic utilitzant l'API de ts-graphviz, i la creació del fitxer SVG resultant.

## Requeriments

Per poder utilitzar aquesta eina, assegura't de tenir Node.js instal·lat al teu sistema. També cal que instal·lis les dependències del projecte mitjançant la comanda:

```bash
npm install
```

## Ús

Pots utilitzar aquesta eina de diverses maneres segons les teves necessitats. Aquí tenim algunes opcions d'ús com a exemple:

### Convertir un fitxer DOT a SVG

Per convertir un fitxer DOT a un fitxer SVG, pots utilitzar la funció `dotToSvg` com es mostra a continuació:

```javascript
const { dotToSvg } = require("./path/to/dotToSvg");

(async () => {
  const dotString = "..."; // El contingut del teu fitxer DOT
  const outputDirectory = "./output"; // El directori on vols desar els resultats
  const outputFilename = "output"; // El nom base dels fitxers generats

  const [dotFile, svgFile] = await dotToSvg(
    dotString,
    outputDirectory,
    outputFilename
  );

  console.log(`Fitxer DOT generat: ${dotFile}`);
  console.log(`Fitxer SVG generat: ${svgFile}`);
})();
```

### Executar els tests

Per assegurar-te que l'eina funciona correctament, pots executar els tests inclosos mitjançant la comanda:

```bash
npm test
```

## Contribucions

Si vols contribuir a aquest projecte, ets benvingut/da! Pots obrir una _pull request_ amb les teves millores o correccions.

## Llicència

Aquest projecte està sota la llicència MIT. Consulta el fitxer [LICENSE](LICENSE) per a més informació.
