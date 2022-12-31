export type TypeAliment =
  'vide'
  | 'legume'
  | 'fruit'
  | 'viande'
  | 'poisson'
  | 'fruitdemer'
  | 'champignon'
  | 'sauce'
  | 'salade'
  | 'base'
  | 'soft'
  | 'alcool'
  | 'fromage'
  | 'liquide'
  | 'fruitacoque'
  | 'sucre'
  | 'cereale';
export type Genre = 'F' | 'M';
export type Nombre = 'S' | 'P';
export type TypePlat = 'entree' | 'plat' | 'dessert';
export type TypeSuite = 'determimantPrincipal' | 'determinantSecondaire' | 'adjectifPossessif';

export type Ingredient = {
  Nom: string,
  Genre: Genre,
  Nombre: Nombre,
  Types: TypeAliment[],
  DetermimantPrincipal: string,
  DeterminantSecondaire: string,
  AdjectifPossessif:  string,
}

export type Plat = {
  Nom: string,
  Genre: Genre,
  Nombre: Nombre,
  Types: TypePlat[],
  Entree: TypeAliment[],
  Plat: TypeAliment[],
  Dessert: TypeAliment[],
}

export type Adjectif = {
  Nom_M_S: string,
  Nom_M_P: string,
  Nom_F_S: string,
  Nom_F_P: string,
  Types: TypeAliment[],
}

export type Pre = {
  Nom_M_S: string,
  Nom_M_P: string,
  Nom_F_S: string,
  Nom_F_P: string,
  Types: TypePlat[],
}

export type Post = {
  Nom: string,
  Types: TypePlat[],
}

export type Lien = {
  Nom_M_S: string,
  Nom_M_P: string,
  Nom_F_S: string,
  Nom_F_P: string,
  Suite: TypeSuite,
}
export type Menu = {
  Nom: string,
}
export type Complement = {
  Nom: string,
}

export type MenuNode = {
  recordId: string,
  data: Menu,
}
export type ComplementNode = {
  recordId: string,
  data: Complement,
}
export type PlatNode = {
  recordId: string,
  data: Plat,
}
export type IngredientNode = {
  recordId: string,
  data: Ingredient,
}
export type AdjectifNode = {
  recordId: string,
  data: Adjectif,
}
export type PreNode = {
  recordId: string,
  data: Pre,
}
export type PostNode = {
  recordId: string,
  data: Post,
}
export type LienNode = {
  recordId: string,
  data: Lien,
}
export type MenuEdge = {
  node: MenuNode,
}
export type ComplementEdge = {
  node: ComplementNode,
}
export type PlatEdge = {
  node: PlatNode,
}
export type IngredientEdge = {
  node: IngredientNode,
}
export type AdjectifEdge = {
  node: AdjectifNode,
}
export type PreEdge = {
  node: PreNode,
}
export type PostEdge = {
  node: PostNode,
}
export type LienEdge = {
  node: LienNode,
}
export type MenuEdges = {
  edges: MenuEdge[],
}
export type ComplementEdges = {
  edges: ComplementEdge[],
}
export type PlatEdges = {
  edges: PlatEdge[],
}
export type IngredientEdges = {
  edges: IngredientEdge[],
}
export type AdjectifEdges = {
  edges: AdjectifEdge[],
}
export type PreEdges = {
  edges: PreEdge[],
}
export type PostEdges = {
  edges: PostEdge[],
}
export type LienEdges = {
  edges: LienEdge[],
}
export type DataType = {
  menu: MenuEdges,
  complement: ComplementEdges,
  plat:  PlatEdges,
  ingredient: IngredientEdges,
  adjectif: AdjectifEdges,
  pre: PreEdges,
  post: PostEdges,
  lien: LienEdges,
}
