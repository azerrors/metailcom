import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../../context/main-context";
import { getMealByArea } from "../../services/mealApi/mealMain";
import { MealTypes } from "../../ui/List";
import MealItem from "./MealItem";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";

function FilteredMealArea() {
  const { mealArea, dispatch } = useMainContext();

  const { data: mealByArea, isLoading } = useQuery({
    queryKey: ["meal/area", mealArea],
    queryFn: () => getMealByArea(mealArea),
  });
  return (
    <div>
      <div className="md:mx-24 flex  flex-row justify-center gap-20 items-center md:justify-between pt-6  ">
        <FaList
          className="text-tertiary_light dark:text-secondary text-xl md:hidden "
          onClick={() => dispatch({ type: "ACTION_OPEN_MEAL_SIDEBAR" })}
        />
        <div className="flex flex-col md:flex-row dark:text-secondary items-center  gap-5">
          <h3 className="md:text-xl w-56 md:w-72 md:screen truncate text-sm border-b-2">
            Meals filtered by{" "}
            <span className="p-1 bg-tertiary rounded-md dark:text-secondary font-medium">
              {mealArea}
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
          {mealByArea?.map((meal: MealTypes) => {
            return <MealItem meal={meal} key={meal.idMeal} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default FilteredMealArea;
