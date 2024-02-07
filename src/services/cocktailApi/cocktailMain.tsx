const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export async function getSearchedCocktails(query: string) {
  const res = await fetch(`${BASE_URL}search.php?s=${query}`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailByID(id: string) {
  const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailsByCategory(category: string) {
  const res = await fetch(`${BASE_URL}filter.php?c=${category}`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailsByIngredient(ing: string) {
  const res = await fetch(`${BASE_URL}filter.php?i=${ing}`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailsByAlcohol(alcohol: string) {
  const res = await fetch(`${BASE_URL}filter.php?a=${alcohol}`);
  const { drinks } = await res.json();
  return drinks;
}
export async function getCocktailsByGlass(glass: string) {
  const res = await fetch(`${BASE_URL}filter.php?g=${glass}`);
  const { drinks } = await res.json();
  return drinks;
}
