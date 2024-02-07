import React from "react";
import { useMainContext } from "../../context/main-context";
import { useQuery } from "@tanstack/react-query";
import { getSearchedCocktails } from "../../services/cocktailApi/cocktailMain";
import Input from "../../ui/reusable/Input";
import Spinner from "../../ui/Spinner";
import { CocktailType } from "../Home/PopularDrinksList";
import CocktailItem from "./CocktailItem";

function FilteredDrinkSearch() {
  const { drinkInput, dispatch } = useMainContext();

  const { data: cocktail, isLoading } = useQuery({
    queryKey: ["cocktailInput", drinkInput],
    queryFn: () => getSearchedCocktails(drinkInput),
  });
  return (
    <div>
      {
        <div className="flex justify-end mx-24">
          <Input
            inp="primary"
            placeholder="search cocktail"
            value={drinkInput}
            onChange={(e) =>
              dispatch({
                type: "ACTION_GET_COCKTAIL_INPUT",
                payload: e.target.value,
              })
            }
          />
        </div>
      }
      {isLoading ? (
        <div className="h-[35rem] flex justify-center pt-40 ">
          <Spinner />
        </div>
      ) : (
        <ul className="flex flex-wrap  justify-center">
          {cocktail?.map((cocktail: CocktailType) => {
            return <CocktailItem cocktail={cocktail} key={cocktail.idDrink} />;
          })}
        </ul>
      )}
      {!cocktail?.length && <>NOT FOUND </>}
    </div>
  );
}

export default FilteredDrinkSearch;
