export type ChenNotationModel = {
  ENTITIES: Entity[];
  RELATIONSHIPS: Relationship[];
};

export type Entity = {
  NAME: string;
  ATTRIBUTES: Attribute[];
  IS_WEAK_ENTITY: boolean;
};

export type Attribute = {
  NAME: string;
  TYPE: "ATOMIC" | "COMPOSITE" | "DERIVED" | "MULTIVALUED";
  KEY_TYPE: "PK" | "FK";
  IS_WEAK: boolean;
};

export type Relationship = {
  NAME: string;
  ENTITIES: RelationshipEntity[];
  ATTRIBUTES: Attribute[];
  RELATIONSHIP_TYPE: "NORMAL" | "SPECIALIZATION" | "AGGREGATION";
  IS_ASSOCIATIVE: boolean;
};

export type RelationshipEntity = {
  NAME: string;
  CARDINALITY: "1:1" | "1:N" | "N:1" | "N:M";
  MIN_MAX_NOTATION: string; // Utilitzant string aquí perquè es defineix amb una expressió regular
};
