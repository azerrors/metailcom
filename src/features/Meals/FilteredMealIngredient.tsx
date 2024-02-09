import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../../context/main-context";
import { getMealByIngredient } from "../../services/mealApi/mealMain";
import { MealTypes } from "../../ui/List";
import MealItem from "./MealItem";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";

function FilteredMealIngredient() {
  const { mealIngredient, dispatch } = useMainContext();

  const { data: mealByIngredient, isLoading } = useQuery({
    queryKey: ["meal/ingredient", mealIngredient],
    queryFn: () => getMealByIngredient(mealIngredient),
  });
  return (
    <div>
      <div className="md:mx-24 flex  flex-row justify-center gap-20 items-center md:justify-between pt-6  ">
        <FaList
          className="text-tertiary_light  dark:text-secondary text-xl md:hidden "
          onClick={() => dispatch({ type: "ACTION_OPEN_MEAL_SIDEBAR" })}
        />
        <div className="flex flex-col md:flex-row dark:text-secondary items-center  gap-5">
          <h3 className="md:text-xl w-56 md:w-96  truncate text-sm border-b-2">
            Meals filtered by{" "}
            <span className="p-1 bg-tertiary rounded-md text-secondary font-medium">
              {mealIngredient}
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
          {mealByIngredient?.map((meal: MealTypes) => {
            return <MealItem meal={meal} key={meal.idMeal} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default FilteredMealIngredient;
