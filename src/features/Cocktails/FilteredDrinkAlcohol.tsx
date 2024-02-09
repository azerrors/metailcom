import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import { getCocktailsByAlcohol } from "../../services/cocktailApi/cocktailMain";
import Spinner from "../../ui/Spinner";
import { CocktailType } from "../Home/PopularDrinksList";
import CocktailItem from "./CocktailItem";
import { FaList } from "react-icons/fa6";

function FilteredDrinkAlcohol() {
  const { drinkAlcohol,dispatch } = useMainContext();

  const { data: cocktailByAlcohol, isLoading } = useQuery({
    queryKey: ["cocktail/alcohol", drinkAlcohol],
    queryFn: () => getCocktailsByAlcohol(drinkAlcohol),
  });
  return (
    <div>
      <div className="md:mx-24 flex  flex-row justify-center gap-20 items-center md:justify-between pt-6  ">
        <FaList
          className="text-tertiary_light dark:text-secondary text-xl md:hidden "
          onClick={() => dispatch({ type: "ACTION_OPEN_COCKTAIL_SIDEBAR" })}
        />
        <div className="flex flex-col dark:text-secondary md:flex-row items-center  gap-5">
          <h3 className="md:text-xl text-sm w-56 truncate border-b-2">
            Drinks filtered by{" "}
            <span className="p-1 bg-tertiary rounded-md text-secondary font-medium">
              {drinkAlcohol}
            </span>
          </h3>
          <Link
            to="/meals/search"
            className="border-b-2 border-tertiary w-48 hover:bg-tertiary/20 transition-all duration-300 cursor-pointer rounded-md p-1"
          >
            Back to search
          </Link>
        </div>
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
