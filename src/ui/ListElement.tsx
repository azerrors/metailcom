import { Link } from "react-router-dom";
import { MealTypes } from "./List";

type ListElementProps = {
  meal: MealTypes;
  type: string;
};

function ListElement({ meal, type }: ListElementProps) {
  if (type === "list1") {
    const { strMeal, strMealThumb, idMeal, strCategory } = meal;
    return (
      <div className="mt-5 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
        <Link to={`/${idMeal}?idMeal=${idMeal}`}>
          <div>
            <img src={strMealThumb} alt="" className="rounded-md" />
            <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <h2 className="md:text-2xl text-lg absolute text-secondary bottom-2 left-2 font-medium">
            {strMeal}
          </h2>
          <h4 className="absolute bottom-9 left-2 text-md md:text-lg text-secondary/50">
            {strCategory}
          </h4>
        </Link>
      </div>
    );
  }
}

export default ListElement;
