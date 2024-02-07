import { MealTypes } from "../../../ui/List";
import { Link } from "react-router-dom";

type SimilarMealItemProps = {
  meal: MealTypes;
};

function SimilarMealItem({ meal }: SimilarMealItemProps) {
  const { strMeal, strMealThumb, idMeal } = meal;
  return (
    <div className="mt-5 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
      <Link to={`/${idMeal}?idMeal=${idMeal}`}>
        <div>
          <img src={strMealThumb} alt="" className="rounded-md w-full" />
          <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <h2 className="md:text-lg text-xs w-32 absolute truncate text-secondary bottom-2 left-2 font-medium">
          {strMeal}
        </h2>
      </Link>
    </div>
  );
}

export default SimilarMealItem;
