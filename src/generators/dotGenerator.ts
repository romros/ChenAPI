import {
  Entity,
  Relationship,
  ChenNotationModel,
} from "../types/ChenNotationModel";

export function generateEntitiesDot(entities: Entity[]): string {
  const dotOutput: string[] = [];

  for (const entity of entities) {
    const entityName = entity.NAME.toUpperCase();

    if (entity.IS_WEAK_ENTITY) {
      dotOutput.push(
        `"${entityName}" [shape=box, style="rounded,dashed", label="${entityName}"];`
      );
    } else {
      dotOutput.push(`"${entityName}" [shape=box, label="${entityName}"];`);
    }
  }

  return dotOutput.join("\n");
}

export function generateAttributesDot(entities: Entity[]): string {
  const dotOutput: string[] = [];

  for (const entity of entities) {
    const entityName = entity.NAME.toUpperCase();

    for (const attribute of entity.ATTRIBUTES) {
      const attributeName = `${entityName}_${attribute.NAME}`;
      let displayName = attribute.NAME;
      const attributeType = attribute.TYPE || "NORMAL";
      const keyType = attribute.KEY_TYPE || "NONE";

      let shape = "ellipse";
      let style = "";
      const width = "0.5";
      const height = "0.3";

      if (attributeType === "COMPOSITE") {
        style = "filled";
      } else if (attributeType === "MULTIVALUED") {
        shape = "doublecircle";
      } else if (attributeType === "DERIVED") {
        style = "dashed";
      }

      if (keyType === "PK") {
        displayName = `<u>${displayName}</u>`;
      }

      dotOutput.push(
        `"${attributeName}" [shape=${shape}, style="${style}", label=< ${displayName} >, width=${width}, height=${height}, fontsize="10"];`
      );
      dotOutput.push(`"${entityName}" -- "${attributeName}" [dir=none];`);
    }
  }

  return dotOutput.join("\n");
}

export function generateRelationshipsDot(
  relationships: Relationship[]
): string {
  const dotOutput: string[] = [];

  for (const relationship of relationships) {
    const relationshipName = relationship.NAME.toUpperCase();

    dotOutput.push(
      `"${relationshipName}" [shape=diamond, style=filled, color=black, fillcolor=lightgrey, label="${relationshipName}"];`
    );

    for (const entity of relationship.ENTITIES) {
      const entityName = entity.NAME.toUpperCase();
      const cardinality = entity.CARDINALITY;

      dotOutput.push(
        `"${relationshipName}" -- "${entityName}" [label="${cardinality}", len=1.6];`
      );
    }
  }

  return dotOutput.join("\n");
}

export function generateDotFromJson(jsonModel: ChenNotationModel): string {
  const entities = jsonModel.ENTITIES;
  const relationships = jsonModel.RELATIONSHIPS;

  const dotParts = [
    "graph ConceptualModel {",
    "layout=neato;",
    "overlap=scale;",
    generateEntitiesDot(entities),
    generateAttributesDot(entities),
    generateRelationshipsDot(relationships),
    "}",
  ];

  return dotParts.join("\n");
}
