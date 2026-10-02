const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

// API returns this string instead of null when nothing matches
const NO_DATA = "no data found";

export async function getSearchedCocktails(query: string) {
  // API no longer returns drinks for an empty search, so list by first letter instead
  const res = await fetch(
    query ? `${BASE_URL}search.php?s=${query}` : `${BASE_URL}search.php?f=a`
  );
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}

export async function getCocktailByID(id: string) {
  const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}

export async function getCocktailsByCategory(category: string) {
  const res = await fetch(`${BASE_URL}filter.php?c=${category}`);
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}

export async function getCocktailsByIngredient(ing: string) {
  const res = await fetch(`${BASE_URL}filter.php?i=${ing}`);
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}

export async function getCocktailsByAlcohol(alcohol: string) {
  const res = await fetch(`${BASE_URL}filter.php?a=${alcohol}`);
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}
export async function getCocktailsByGlass(glass: string) {
  const res = await fetch(`${BASE_URL}filter.php?g=${glass}`);
  const { drinks } = await res.json();
  return drinks === NO_DATA ? null : drinks;
}
