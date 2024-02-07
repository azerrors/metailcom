const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export async function getCocktailCategoryList() {
  const res = await fetch(`${BASE_URL}list.php?c=list`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailGlassList() {
  const res = await fetch(`${BASE_URL}list.php?g=list`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailAlcoholList() {
  const res = await fetch(`${BASE_URL}list.php?a=list`);
  const { drinks } = await res.json();
  return drinks;
}

export async function getCocktailIngredientList() {
  const res = await fetch(`${BASE_URL}list.php?i=list`);
  const { drinks } = await res.json();
  return drinks;
}