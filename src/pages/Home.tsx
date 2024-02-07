import { useQuery } from "@tanstack/react-query";

import { getSearchedCocktails } from "../services/cocktailApi/cocktailMain";
import { getSearchedMeals } from "../services/mealApi/mealMain";
import { getAllCategories } from "../services/mealApi/mealOther";

import AllCategoryList from "../features/Home/AllCategoryList";
import PopularDrinksList from "../features/Home/PopularDrinksList";
import List from "../ui/List";
import Button from "../ui/reusable/Button";
import Skeleton from "react-loading-skeleton";
import SkeletonUi from "../ui/SkeletonUi";

function Home() {
  const { data: trending, isLoading: trendLoading } = useQuery({
    queryKey: ["trending", ""],
    queryFn: () => getSearchedMeals(""),
  });

  const { data: allCategories } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAllCategories(),
  });

  const { data: popularDrinks } = useQuery({
    queryKey: ["popularDrinks", ""],
    queryFn: () => getSearchedCocktails(""),
  });

  return (
    <div className="md:mx-72 mt-16 ">
      <section className="relative">
        <div
          style={{ backgroundImage: `url("/homeImage.jpg")` }}
          className="md:h-[35rem] h-96  md:w-full bg-cover bg-center relative"
        >
          <div className="absolute h-full w-full bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
        <h2 className="absolute flex flex-col gap-2 top-36 md:top-48  left-5 md:left-10 tracking-widest text-secondary text-2xl md:text-4xl">
          Explore More <span>Interesting Foods</span>
        </h2>
        <div className="absolute md:top-80 top-64 left-5">
          <Button btn="primary">Explore</Button>
        </div>
      </section>

      <section className="overflow-x-hidden">
        <h2 className="md:text-3xl uppercase tracking-wider mt-20 bg-tertiary/70 p-3 text-secondary">
          Trending RECIPES
        </h2>
        <List type="list1" meal={trending} loading={trendLoading} />
      </section>

      <section className="overflow-x-hidden">
        <h2 className="md:text-3xl uppercase tracking-wider mt-10 p-3 text-tertiary">
          <span className="bg-tertiary/90 rounded-md p-2 text-secondary">
            Meal
          </span>{" "}
          Categories
        </h2>
        <AllCategoryList category={allCategories} />
      </section>

      <section className="flex flex-col md:flex-row mt-10 border border-stone-300 rounded-md ">
        <div className="md:w-[60%]">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg"
            alt=""
            className="md:h-[30rem] w-full"
          />
        </div>
        <div className="px-8 md:pt-16 pt-5 md:w-[40%]">
          <p className="uppercase md:text-medium text-sm font-semibold text-stone-800/50 ">Seafood</p>
          <h2 className="md:text-xl uppercase font-semibold tracking-wider ">
            Baked salmon with fennel & tomatoes
          </h2>
          <p className="text-sm mt-3">
            Heat oven to 180C\/fan 160C\/gas 4. Trim the fronds from the fennel
            and set aside. Cut the fennel bulbs in half, then cut each half into
            3 wedges. Cook in boiling salted water for 10 mins, then drain well.
            Chop the fennel fronds roughly, then mix with the parsley and lemon
            zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof
            dish, then add the tomatoes. Drizzle with olive oil, then bake for
            10 mins. Nestle the salmon among the veg, sprinkle with lemon juice,
            then bake 15 mins more until the fish is just cooked. Scatter over
            the parsley and serve.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl mb-5 uppercase tracking-wider mt-20 bg-tertiary/70 p-3 text-secondary">
          Popular Drinks
        </h2>
        <PopularDrinksList cocktails={popularDrinks} />
      </section>
    </div>
  );
}

export default Home;
