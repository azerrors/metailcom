import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../../context/main-context";
import { getSearchedCocktails } from "../../services/cocktailApi/cocktailMain";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/reusable/Input";
import { CocktailType } from "../Home/PopularDrinksList";
import CocktailItem from "./CocktailItem";
import { FaList } from "react-icons/fa6";

function FilteredDrinkSearch() {
  const { drinkInput, dispatch } = useMainContext();

  const { data: cocktail, isLoading } = useQuery({
    queryKey: ["cocktailInput", drinkInput],
    queryFn: () => getSearchedCocktails(drinkInput),
  });
  return (
    <div>
      <div className="flex items-center justify-center gap-5  md:justify-end md:mx-24">
        <div className="md:hidden">
          <FaList
            className="text-tertiary text-xl"
            onClick={() => dispatch({ type: "ACTION_OPEN_COCKTAIL_SIDEBAR" })}
          />
        </div>
        <Input
          inp="primary"
          placeholder="search drink"
          value={drinkInput}
          onChange={(e) =>
            dispatch({
              type: "ACTION_GET_COCKTAIL_INPUT",
              payload: e.target.value,
            })
          }
        />
      </div>
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
