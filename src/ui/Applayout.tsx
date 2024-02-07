import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";

import { TbMoodSad } from "react-icons/tb";

import { useMainContext } from "../context/main-context";

import { CocktailType } from "../features/Home/PopularDrinksList";
import { MealTypes } from "./List";

import Modal from "./Modal";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

import { getSearchedCocktails } from "../services/cocktailApi/cocktailMain";
import { getSearchedMeals } from "../services/mealApi/mealMain";
import ResponsiveNav from "./ResponsiveNav";
import { useEffect } from "react";

function Applayout() {
  const { mainInput, showResponsiveNav, dispatch, showSearchBar } =
    useMainContext();

  const { data: meal, isLoading: mealLoading } = useQuery({
    queryKey: ["trending", mainInput],
    queryFn: () => getSearchedMeals(mainInput),
  });
  const { data: cocktail, isLoading: cocktailLoading } = useQuery({
    queryKey: ["cocktailInput", mainInput],
    queryFn: () => getSearchedCocktails(mainInput),
  });

  function handleClick() {
    dispatch({ type: "ACTION_CLOSE_MODAL" });
  }

  const loading = mealLoading || cocktailLoading;
  const dataLength = cocktail === null && meal === null;

  useEffect(() => {
    document.body.style.overflowY = showResponsiveNav ? "hidden" : "";
  }, [showResponsiveNav]);

  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex  overflow-x-hidden justify-center" style={{ scrollbarWidth: "thin" }}>
        {mainInput && showSearchBar && (
          <Modal classing="md:w-96 md:scrollbar rounded-md absolute  top-20 max-h-[40rem] md:overflow-y-auto overflow-x-hidden bg-white shadow-md md:ml-3 z-50">
            {loading && (
              <div className="flex justify-center h-56 w-full items-center">
                <Spinner />
              </div>
            )}
            {dataLength && (
              <div className="flex flex-col justify-center  gap-5 h-56 items-center">
                <TbMoodSad className="text-6xl text-tertiary" />
                <p className="text-sm font-medium">
                  {" "}
                  {`Sorry We Could'nt Find Any Result For - ${mainInput}`}
                </p>
              </div>
            )}
            {meal?.map((meal: MealTypes) => {
              return (
                <Link
                  to={`/${meal.idMeal}?idMeal=${meal.idMeal}`}
                  key={meal.idMeal}
                  onClick={handleClick}
                >
                  <div className="md:p-5 p-3 hover:bg-tertiary/20 group  transition-all duration-300 hover:skew-x-2 ">
                    <div className="flex gap-5 ">
                      <div>
                        <img
                          src={meal.strMealThumb}
                          alt=""
                          className="w-16  rounded-md"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h3 className="text-md truncate w-64">
                          {meal.strMeal}
                        </h3>
                        <h4 className="text-sm text-stone-800/60 group-hover:text-stone-800">
                          {meal.strCategory}/{meal.strArea}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {cocktail?.map((cocktail: CocktailType) => {
              return (
                <Link
                  to={`/${cocktail.idDrink}?idDrink=${cocktail.idDrink}`}
                  key={cocktail.idDrink}
                  onClick={handleClick}
                >
                  <div className="md:p-5 p-3 hover:bg-tertiary/20 group  transition-all duration-300 hover:skew-x-2 ">
                    <div className="flex gap-5 ">
                      <div>
                        <img
                          src={cocktail.strDrinkThumb}
                          alt=""
                          className="w-16  rounded-md"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h3 className="text-md truncate w-64">
                          {cocktail.strDrink}
                        </h3>
                        <h4 className="text-sm text-stone-800/60 group-hover:text-stone-800">
                          {cocktail.strCategory}/{cocktail.strAlcoholic}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Modal>
        )}
      </div>
      {showResponsiveNav && <ResponsiveNav />}
      <main className="md:min-h-[45rem] ">
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
