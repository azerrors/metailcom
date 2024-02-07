import React from "react";
import { useMainContext } from "../../context/main-context";
import { useQuery } from "@tanstack/react-query";
import { getCocktailsByAlcohol } from "../../services/cocktailApi/cocktailMain";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { CocktailType } from "../Home/PopularDrinksList";
import CocktailItem from "./CocktailItem";

function FilteredDrinkAlcohol() {
  const { drinkAlcohol } = useMainContext();

  const { data: cocktailByAlcohol, isLoading } = useQuery({
    queryKey: ["cocktail/alcohol", drinkAlcohol],
    queryFn: () => getCocktailsByAlcohol(drinkAlcohol),
  });
  return (
    <div>
      <div className="mx-24 flex items-center justify-between pt-6  ">
        <h3 className="text-xl border-b-2">
          Meals filtered by{" "}
          <span className="p-1 bg-tertiary rounded-md text-secondary font-medium">
            {drinkAlcohol}
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
          {cocktailByAlcohol?.map((meal: CocktailType) => {
            return <CocktailItem cocktail={meal} key={meal.idDrink} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default FilteredDrinkAlcohol;
