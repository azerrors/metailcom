import { Link } from "react-router-dom";
import { AllCategoryType } from "./AllCategoryList";
import { useMainContext } from "../../context/main-context";

type PropType = {
  category: AllCategoryType;
};

function AllCategory({ category }: PropType) {
  const { dispatch } = useMainContext();
  const { strCategory, strCategoryThumb } = category;
  return (
    <Link
      to="meals/category"
      onClick={() =>
        dispatch({
          type: "ACTION_GET_MEAL_CATEGORY",
          payload: category.strCategory,
        })
      }
    >
      <div className="m-2 relative hover:scale-[1.01] hover:-translate-y-2 translate-y-1 transition-all duration-300">
        <div>
          <img src={strCategoryThumb} alt="" className="md:rounded-full rounded-xl" />
          <div className="absolute top-1 h-full w-full md:rounded-full rounded-xl bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <p className="absolute text-secondary bottom-0 text-sm left-3 md:bottom-2 md:text-lg rounded-full  md:left-8">
          {strCategory}
        </p>
      </div>
    </Link>
  );
}

export default AllCategory;
