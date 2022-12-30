import {
  AdjectifEdge,
  DataType,
  IngredientEdge,
  LienEdge,
  PlatEdge,
  PostEdge,
  PreEdge,
  TypePlat,
} from '../data/types';

const _ = require('lodash');

export const generate = (data: DataType, mainType: TypePlat): string[] => {

  const platPrincipal: PlatEdge = getPlatByType(data.plat.edges, mainType);

  const ingredients = data.ingredient.edges.filter((item: IngredientEdge) =>
    _.intersection(
      item.node.data.Types,
      // @ts-ignore
      platPrincipal.node.data[_.capitalize(mainType)],
    ).length > 0,
  );

  return [
    generateMain(data, platPrincipal, ingredients),
    generateSecond(data, platPrincipal, ingredients),
  ];
}

const getAdjectifBasedOnIngredient = (adjectifEdges: AdjectifEdge[], ingredient: IngredientEdge): AdjectifEdge => {
  const adjectifsSecondaires = adjectifEdges.filter((item: AdjectifEdge) =>
    _.intersection(
      item.node.data.Types,
      ingredient.node.data.Types,
    ),
  );
  return adjectifsSecondaires[_.random(0, adjectifsSecondaires.length - 1)];
}

const getPlatByType = (platEdges: PlatEdge[], mainType: TypePlat): PlatEdge => {
  const plats: PlatEdge[] = platEdges.filter((item: PlatEdge) =>
    item.node.data.Types?.includes(mainType),
  );

  return plats[_.random(0, plats.length - 1)];
}

const generateMain = (data: DataType, platPrincipal: PlatEdge, ingredients: IngredientEdge[]): string => {
  let main: string = '';
  const ingredientPrincipal: IngredientEdge = ingredients[_.random(0, ingredients.length - 1)];
  const nameDrivedByIngredientPrincipal = `Nom_${ingredientPrincipal.node.data.Genre}_${ingredientPrincipal.node.data.Nombre}`;
  const adjectifPrincipal: AdjectifEdge = getAdjectifBasedOnIngredient(data.adjectif.edges, ingredientPrincipal);
  const nameDrivedByPlat = `Nom_${platPrincipal.node.data.Genre}_${platPrincipal.node.data.Nombre}`;
  if (_.random(1, 3) === 3) {
    const prePrincipal: PreEdge = data.pre.edges[_.random(0, data.pre.edges.length - 1)];
    // @ts-ignore
    main += prePrincipal.node.data[nameDrivedByPlat];
    main += ' ';
  }
  main += platPrincipal.node.data.Nom;
  main += ' ';
  main += ingredientPrincipal.node.data.DetermimantPrincipal;
  if (!ingredientPrincipal.node.data.DetermimantPrincipal.endsWith('\'')) {
    main += ' ';
  }
  main += ingredientPrincipal.node.data.Nom;
  main += ' ';
  // @ts-ignore
  main += adjectifPrincipal.node.data[nameDrivedByIngredientPrincipal];

  if (_.random(1, 3) === 3) {
    const postPrincipal: PostEdge = data.post.edges[_.random(0, data.post.edges.length - 1)];
    main += ' ';
    main += postPrincipal.node.data.Nom;
  }
  return _.capitalize(main);
}

const generateSecond = (data: DataType, platPrincipal: PlatEdge, ingredients: IngredientEdge[]): string => {

  let second: string = '';
  const nameDrivedByPlat = `Nom_${platPrincipal.node.data.Genre}_${platPrincipal.node.data.Nombre}`;
  const lienSecondaire: LienEdge = data.lien.edges[_.random(0, data.lien.edges.length - 1)];
  const ingredientSecondaire: IngredientEdge = ingredients[_.random(0, ingredients.length - 1)];
  const nameDrivedByIngredientSecondaire = `Nom_${ingredientSecondaire.node.data.Genre}_${ingredientSecondaire.node.data.Nombre}`;
  const tmpArrayKey: string = lienSecondaire.node.data.Suite[0].toUpperCase()
    + lienSecondaire.node.data.Suite.substr(1);
  // @ts-ignore
  const preIngredient: string = ingredientSecondaire.node.data[tmpArrayKey];
  const adjectifSecondaire: AdjectifEdge = getAdjectifBasedOnIngredient(data.adjectif.edges, ingredientSecondaire);

  // @ts-ignore
  second += lienSecondaire.node.data[nameDrivedByPlat];
  second += ' ';
  second += preIngredient;
  if (!preIngredient.endsWith('\'')) {
    second += ' ';
  }
  second += ingredientSecondaire.node.data.Nom;
  second += ' ';
  // @ts-ignore
  second += adjectifSecondaire.node.data[nameDrivedByIngredientSecondaire];

  if (_.random(1, 3) === 3) {
    const postSecondaire: PostEdge = data.post.edges[_.random(0, data.post.edges.length - 1)];
    second += ' ';
    second += postSecondaire.node.data.Nom;
  }
  return second;
}