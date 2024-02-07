import {
  BsArrowRightShort
} from "react-icons/bs";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";

type MealSidebarProps = {
  area: { strArea: string }[];
  category: { strCategory: string }[];
  ingredient: { strIngredient: string }[];
};

function MealSidebar({ area, category, ingredient }: MealSidebarProps) {
  const { dispatch } = useMainContext();
  return (
    <div className="absolute top-0 bg-secondary  overflow-y-hidden w-full z-50">
      <section
        className="flex justify-end p-1"
        onClick={() => dispatch({ type: "ACTION_CLOSE_MEAL_SIDEBAR" })}
      >
        <MdOutlineCloseFullscreen className="text-2xl" />
      </section>

      <section>
        <div className="px-10 ">
          <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
            AREA
          </h3>
          <ul className="grid grid-cols-2 gap-8">
            {area?.map((area: { strArea: string }) => {
              return (
                <Link
                  to="area"
                  key={area.strArea}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_MEAL_AREA",
                      payload: area.strArea,
                    })
                  }
                  className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                >
                  {area.strArea}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <div className="p-10 ">
          <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
            CATEGORY
          </h3>
          <ul className="grid grid-cols-2 gap-8">
            {category?.map((category: { strCategory: string }) => {
              return (
                <Link
                  to="category"
                  key={category.strCategory}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_MEAL_CATEGORY",
                      payload: category.strCategory,
                    })
                  }
                  className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                >
                  {category.strCategory}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <div className="p-10 ">
          <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
            INGREDIENT
          </h3>
          <ul className="grid grid-cols-2 gap-8">
            {ingredient?.map((ingredient: { strIngredient: string }) => {
              return (
                <Link
                  to="ingredient"
                  key={ingredient.strIngredient}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_MEAL_INGREDIENT",
                      payload: ingredient.strIngredient,
                    })
                  }
                  className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                >
                  {ingredient.strIngredient}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MealSidebar;
