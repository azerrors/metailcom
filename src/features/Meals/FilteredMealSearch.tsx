import { useQuery } from "@tanstack/react-query";

import { FaList } from "react-icons/fa6";

import { useMainContext } from "../../context/main-context";

import { getSearchedMeals } from "../../services/mealApi/mealMain";

import { MealTypes } from "../../ui/List";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/reusable/Input";
import MealItem from "./MealItem";
import { CgSmileSad } from "react-icons/cg";

function FilteredMealSearch() {
  const { mealInput, dispatch } = useMainContext();

  const { data: meal, isLoading } = useQuery({
    queryKey: ["trending", mealInput],
    queryFn: () => getSearchedMeals(mealInput),
  });
  return (
    <div>
      <div className="flex items-center justify-center gap-5  md:justify-end md:mx-24">
        <div className="md:hidden ">
          <FaList
            className="text-tertiary_light dark:text-secondary text-xl"
            onClick={() => dispatch({ type: "ACTION_OPEN_MEAL_SIDEBAR" })}
          />
        </div>
        <Input
          inp="primary"
          placeholder="search meal"
          value={mealInput}
          onChange={(e) =>
            dispatch({
              type: "ACTION_GET_MEAL_INPUT",
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
          {meal?.map((meal: MealTypes) => {
            return <MealItem meal={meal} key={meal.idMeal} />;
          })}
        </ul>
      )}
      {!meal?.length && (
        <div className="flex uppercase justify-center mt-32 items-center text-2xl text-tertiary_light gap-4">
          No results found <CgSmileSad className="" />{" "}
        </div>
      )}
    </div>
  );
}

export default FilteredMealSearch;
