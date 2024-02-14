import { MealTypes } from "../../ui/List";
import { CocktailType } from "../Home/PopularDrinksList";

import DrinkDetailItem from "./drink/DrinkDetailItem";
import MealDetailItem from "./meal/MealDetailItem";

type DetailListProps = {
  meal?: MealTypes[];
  cocktail?: CocktailType[];
};

function DetailList({ meal,  cocktail }: DetailListProps) {
  if (meal) {
    return meal?.map((meal) => {
      return (
        <MealDetailItem
          meal={meal}
          key={meal.idMeal}
        />
      );
    });
  }
  if (cocktail) {
    return cocktail?.map((cocktails) => {
      return <DrinkDetailItem drink={cocktails} key={cocktails.idDrink} />;
    });
  }
}

export default DetailList;
