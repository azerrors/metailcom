const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function getSearchedMeals(query: string) {
  const res = await fetch(`${BASE_URL}search.php?s=${query}`);
  const { meals } = await res.json();
  return meals;
}

export async function getMealByID(id: string) {
  const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const { meals } = await res.json();
  return meals;
}

export async function getMealByCategory(category: string) {
  const res = await fetch(`${BASE_URL}filter.php?c=${category}`);
  const { meals } = await res.json();
  return meals;
}

export async function getMealByArea(category: string) {
  const res = await fetch(`${BASE_URL}filter.php?a=${category}`);
  const { meals } = await res.json();
  return meals;
}
export async function getMealByIngredient(int: string) {
  const res = await fetch(`${BASE_URL}filter.php?i=${int}`);
  const { meals } = await res.json();
  return meals;
}
