import { useQuery } from "@tanstack/react-query";
import {
  BsArrowDownShort,
  BsArrowRightShort,
  BsArrowUpShort,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import {
  getCocktailAlcoholList,
  getCocktailCategoryList,
  getCocktailGlassList,
  getCocktailIngredientList,
} from "../../services/cocktailApi/cocktailOther";
import CocktailSidebar from "./CocktailSidebar";

function DropdownMenu() {
  const { dispatch, showCocktailSidebar } = useMainContext();

  const { data: cocktailCategoryList } = useQuery({
    queryKey: ["cocktailCategoryList"],
    queryFn: () => getCocktailCategoryList(),
  });

  const { data: cocktailAlcoholList } = useQuery({
    queryKey: ["cocktailAlcoholList"],
    queryFn: () => getCocktailAlcoholList(),
  });

  const { data: cocktailIngredientList } = useQuery({
    queryKey: ["cocktailIngredientList"],
    queryFn: () => getCocktailIngredientList(),
  });
  const { data: cocktailGlassList } = useQuery({
    queryKey: ["cocktailGlassList"],
    queryFn: () => getCocktailGlassList(),
  });

  if (showCocktailSidebar) {
    return (
      <CocktailSidebar
        glass={cocktailGlassList}
        ingredient={cocktailIngredientList}
        category={cocktailCategoryList}
        alcoholic={cocktailAlcoholList}
      />
    );
  }

  return (
    <div className="md:flex hidden gap-5 transition-all duration-300">
      <div className="group">
        <p className="flex items-center gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Category
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-4 gap-8">
            {cocktailCategoryList?.map((category: { strCategory: string }) => {
              return (
                <Link
                  to="category"
                  key={category.strCategory}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_COCKTAIL_CATEGORY",
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
        <p className="flex items-center gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Alcohol
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-4 gap-8">
            {cocktailAlcoholList?.map((category: { strAlcoholic: string }) => {
              return (
                <Link
                  to="alcohol"
                  key={category.strAlcoholic}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_COCKTAIL_ALCOHOL",
                      payload: category.strAlcoholic,
                    })
                  }
                  className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                >
                  {category.strAlcoholic}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="group">
        <p className="flex items-center gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Glass
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-4 gap-8">
            {cocktailGlassList?.map((category: { strGlass: string }) => {
              return (
                <Link
                  to="glass"
                  key={category.strGlass}
                  onClick={() =>
                    dispatch({
                      type: "ACTION_GET_COCKTAIL_GLASS",
                      payload: category.strGlass,
                    })
                  }
                  className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                >
                  {category.strGlass}
                  <BsArrowRightShort />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="group">
        <p className="flex items-center gap-1 text-lg font-medium group-hover:border-b-2 border-tertiary p-1">
          Ingredient
          <BsArrowDownShort className="group-hover:hidden" />
          <BsArrowUpShort className="hidden group-hover:inline-block" />
        </p>
        <div className="bg-stone-100 min-w-56 absolute z-50  p-10 hidden group-hover:inline-block">
          <div className="flex p"></div>
          <ul className="grid grid-cols-5 w-[50rem]  gap-8 h-60 overflow-auto">
            {cocktailIngredientList?.map(
              (ingredient: { strIngredient1: string }) => {
                return (
                  <Link
                    to="ingredient"
                    key={ingredient.strIngredient1}
                    onClick={() =>
                      dispatch({
                        type: "ACTION_GET_COCKTAIL_INGREDIENT",
                        payload: ingredient.strIngredient1,
                      })
                    }
                    className="hover:border-b flex items-center justify-between cursor-pointer  border-tertiary"
                  >
                    {ingredient.strIngredient1}
                    <BsArrowRightShort />
                  </Link>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
