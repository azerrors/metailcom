import { useQuery } from "@tanstack/react-query";
import {
  BsArrowDownShort,
  BsArrowRightShort,
  BsArrowUpShort,
} from "react-icons/bs";

import { useMainContext } from "../../context/main-context";

import { Link } from "react-router-dom";
import {
  getMealByAreaList,
  getMealByCategoryList,
  getMealByIngredientList,
} from "../../services/mealApi/mealOther";
import MealSidebar from "./MealSidebar";

function DropDownMenu() {
  const { dispatch, showMealSidebar } = useMainContext();

  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getMealByCategoryList(),
  });

  const { data: areaList } = useQuery({
    queryKey: ["areaList"],
    queryFn: () => getMealByAreaList(),
  });

  const { data: ingList } = useQuery({
    queryKey: ["ingList"],
    queryFn: () => getMealByIngredientList(),
  });

  if (showMealSidebar) {
    return (
      <MealSidebar
        area={areaList}
        ingredient={ingList}
        category={categoryList}
      />
    );
  }

  return (
    <div className="hidden md:flex gap-5 transition-all duration-300">
      <div className="group">
        <p className="flex items-center gap-1 dark:text-secondary text-lg font-medium group-hover:border-b-2 border-tertiary_light p-1">
          Category
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 dark:bg-tertiary_dark dark:text-secondary min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid  grid-cols-4 gap-8">
            {categoryList?.map((category: { strCategory: string }) => {
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
      </div>

      <div className="group">
        <p className="flex items-center   border-tertiary_light  dark:text-secondary gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Area
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 dark:bg-tertiary_dark dark:text-secondary min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-5 gap-8">
            {areaList?.map((category: { strArea: string }) => {
              return (
                <Link
                  to="area"
                  key={category.strArea}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_MEAL_AREA",
                      payload: category.strArea,
                    })
                  }
                  className="hover:border-b flex items-center justify-between cursor-pointer  border-tertiary"
                >
                  {category.strArea}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="group">
        <p className="flex   border-tertiary_light  items-center dark:text-secondary gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Ingredient
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 dark:bg-tertiary_dark scrollbar dark:text-secondary min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-5 w-[50rem]  gap-8 h-60 overflow-auto">
            {ingList?.map((ingredient: { strIngredient: string }) => {
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
                  className="hover:border-b flex items-center justify-between cursor-pointer  border-tertiary"
                >
                  {ingredient.strIngredient}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;
