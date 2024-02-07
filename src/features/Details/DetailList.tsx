import { MealTypes } from "../../ui/List";
import { CocktailType } from "../Home/PopularDrinksList";

import DetailItem from "./DetailItem";

type DetailListProps = {
  meal?: MealTypes[];
  cocktail?: CocktailType[];
};

function DetailList({ meal, cocktail }: DetailListProps) {
  if (meal) {
    return meal?.map((meal) => {
      return <DetailItem meal={meal} key={meal.idMeal} />;
    });
  }
  if (cocktail) {
    return cocktail?.map((cocktails) => {
      return <DetailItem cocktail={cocktails} key={cocktails.idDrink} />;
    });
  }
}

export default DetailList;
