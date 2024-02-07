const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function getAllCategories() {
  const res = await fetch(`${BASE_URL}categories.php`);
  const { categories } = await res.json();
  return categories;
}

export async function getMealByCategoryList() {
  const res = await fetch(`${BASE_URL}list.php?c=list`);
  const { meals } = await res.json();
  return meals;
}

export async function getMealByAreaList() {
  const res = await fetch(`${BASE_URL}list.php?a=list`);
  const { meals } = await res.json();
  return meals;
}
export async function getMealByIngredientList() {
  const res = await fetch(`${BASE_URL}list.php?i=list`);
  const { meals } = await res.json();
  return meals;
}
