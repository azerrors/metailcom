import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import { getCocktailsByIngredient } from "../../services/cocktailApi/cocktailMain";
import Spinner from "../../ui/Spinner";
import { CocktailType } from "../Home/PopularDrinksList";
import CocktailItem from "./CocktailItem";

function FilteredDrinkIngredient() {
  const { drinkIngredient } = useMainContext();

  const { data: cocktailByIngredient, isLoading } = useQuery({
    queryKey: ["cocktail/Ingredient", drinkIngredient],
    queryFn: () => getCocktailsByIngredient(drinkIngredient),
  });

  return (
    <div>
      <div className="mx-24 flex items-center justify-between pt-6  ">
        <h3 className="text-xl border-b-2">
          Drinks filtered by{" "}
          <span className="p-1 bg-tertiary rounded-md text-secondary font-medium">
            {drinkIngredient}
          </span>
        </h3>
        <Link
          to="/cocktails/search"
          className="border-b-2 border-tertiary w-48 hover:bg-tertiary/20 transition-all duration-300 cursor-pointer rounded-md p-1"
        >
          Back to search
        </Link>
      </div>
      {isLoading ? (
        <div className="h-[35rem] flex justify-center pt-40 ">
          <Spinner />
        </div>
      ) : (
        <ul className="flex flex-wrap  justify-center">
          {cocktailByIngredient?.map((cocktail: CocktailType) => {
            return <CocktailItem cocktail={cocktail} key={cocktail.idDrink} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default FilteredDrinkIngredient;
