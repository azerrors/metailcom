import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../../context/main-context";
import { getMealByCategory } from "../../services/mealApi/mealMain";
import { MealTypes } from "../../ui/List";
import MealItem from "./MealItem";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";

function FilteredMealCategory() {
  const { mealCategory, dispatch } = useMainContext();

  const { data: mealByCategory, isLoading } = useQuery({
    queryKey: ["meal/category", mealCategory],
    queryFn: () => getMealByCategory(mealCategory),
  });
  return (
    <div>
      <div className="md:mx-24 flex  flex-row justify-center gap-20 items-center md:justify-between pt-6  ">
        <FaList
          className="text-tertiary_light dark:text-secondary text-xl md:hidden "
          onClick={() => dispatch({ type: "ACTION_OPEN_MEAL_SIDEBAR" })}
        />
        <div className="flex flex-col  dark:text-secondary  md:flex-row items-center  gap-5">
          <h3 className="md:text-xl md:w-72 w-56 truncate text-sm border-b-2">
            Meals filtered by{" "}
            <span className="p-1 bg-tertiary rounded-md text-secondary font-medium">
              {mealCategory}
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
          {mealByCategory?.map((meal: MealTypes) => {
            return <MealItem meal={meal} key={meal.idMeal} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default FilteredMealCategory;
