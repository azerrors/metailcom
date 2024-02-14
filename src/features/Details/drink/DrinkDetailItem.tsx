import { useQuery } from "@tanstack/react-query";
import { BsCart2, BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import { useMainContext } from "../../../context/main-context";
import {
  getCocktailsByAlcohol,
  getCocktailsByCategory,
  getCocktailsByGlass,
} from "../../../services/cocktailApi/cocktailMain";
import SliderV from "../../../ui/SliderV";
import { CocktailType } from "../../Home/PopularDrinksList";
import DrinkIngredient from "./DrinkIngredient";
import SimilarCocktailAlcoholicItem from "./SimilarCocktailAlcoholicItem";
import SimilarCocktailCategoryItem from "./SimilarCocktailCategoryItem";
import SimilarCocktailGlassItem from "./SimilarCocktailGlassItem";

type DrinkDetailItemProps = {
  drink: CocktailType;
};

function DrinkDetailItem({ drink }: DrinkDetailItemProps) {
  const {
    idDrink,
    strAlcoholic,
    strCategory: strDrinkCategory,
    strDrinkThumb,
    strDrink,
    strGlass,
    strInstructions: strDrinkInstructions,
  } = drink || {};

  const { cart, dispatch, favorites } = useMainContext();

  const isCart = cart.some((fav) => fav.idDrink === idDrink);

  const isFav = favorites.some((fav) => fav.idDrink === idDrink);

  const addToCart = () => {
    dispatch({
      type: "ACTION_ADD_CART",
      payload: {
        idDrink,
        number: 1,
        strDrinkThumb,
        strDrink,
      },
    });

    toast.success(`|${strDrink}| Added To Cart Basket`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const deleteFromCart = () => {
    dispatch({
      type: "ACTION_DELETE_CART",
      payload: idDrink,
    });

    toast.error(`|${strDrink}| Deleted from Cart Basket`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addToFavorite = () => {
    dispatch({
      type: "ACTION_ADD_FAVORITE",
      payload: {
        number: 1,
        idDrink,
        strDrink,
        strDrinkThumb,
      },
    });
    toast.success(`|${strDrink}| Added To Favorite List`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const deleteFromFavorite = () => {
    dispatch({
      type: "ACTION_DELETE_FAVORITE",
      payload: idDrink,
    });
    toast.error(`|${strDrink}| Deleted To Favorite List`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const { data: similarDrinkCategory } = useQuery({
    queryKey: ["drinkCategory", strDrinkCategory],
    queryFn: () =>
      getCocktailsByCategory(strDrinkCategory ? strDrinkCategory : ""),
  });

  const { data: similarDrinkGlass } = useQuery({
    queryKey: ["drinkGlass", strGlass],
    queryFn: () => getCocktailsByGlass(strGlass ? strGlass : ""),
  });

  const { data: similarDrinkAlcoholic } = useQuery({
    queryKey: ["drinkAlcohol", strAlcoholic],
    queryFn: () => getCocktailsByAlcohol(strAlcoholic ? strAlcoholic : ""),
  });

  return (
    <div className="mt-16 overflow-x-hidden ">
      <section className="flex flex-col md:flex-row md:border border-stone-300">
        <div className="md:w-[60%]">
          <img
            src={strDrinkThumb}
            alt=""
            className="md:min-h-[34rem] h-96 md:max-h-[40rem] w-full"
          />
        </div>
        <div className="md:w-[40%]">
          <div className="px-10">
            <h2 className="md:text-3xl text-xl tracking-widest dark:text-secondary pt-10 font-semibold text-stone-700">
              {strDrink}
            </h2>
            <div className="pb-5 flex gap-2 dark:text-stone-500 ">
              <h4>{strDrinkCategory}</h4>/<h4>{strAlcoholic}</h4>/
              <h4>{strGlass}</h4>
            </div>
            <p className="text-sm dark:text-secondary ">
              {strDrinkInstructions}
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-end mt-10 gap-5 ">
        <div>
          {!isCart ? (
            <button
              onClick={addToCart}
              className="flex items-center gap-2 bg-tertiary_light dark:bg-tertiary_dark hover:skew-x-2 text-xs hover:skew-y-1 transition-all duration-300 uppercase md:text-xl font-medium md:p-2 p-1 text-secondary rounded-md"
            >
              add to basket
              <BsCart2 />
            </button>
          ) : (
            <>
              <button
                onClick={deleteFromCart}
                className="flex items-center gap-2  bg-tertiary_light dark:bg-tertiary_dark hover:skew-x-2 text-xs hover:skew-y-1 transition-all duration-300 uppercase md:text-xl font-medium md:p-2 p-1 text-secondary rounded-md"
              >
                Delete from basket
                <BsCart2 />
              </button>
            </>
          )}
        </div>
        {!isFav ? (
          <button
            onClick={addToFavorite}
            className="flex items-center gap-2 bg-tertiary_light dark:bg-tertiary_dark hover:skew-x-2 text-xs hover:skew-y-1 transition-all duration-300 uppercase md:text-xl font-medium md:p-2 p-1 text-secondary rounded-md"
          >
            add to favorite
            <BsHeart />
          </button>
        ) : (
          <button
            onClick={deleteFromFavorite}
            className="flex items-center gap-2 bg-tertiary_light dark:bg-tertiary_dark hover:skew-x-2 text-xs hover:skew-y-1 transition-all duration-300 uppercase md:text-xl font-medium md:p-2 p-1 text-secondary rounded-md"
          >
            delete from favorite
            <BsHeart />
          </button>
        )}
      </section>

      <section>
        <DrinkIngredient drink={drink} />
      </section>

      <section>
        <h2 className="md:text-3xl flex gap-2  items-center uppercase dark:text-secondary tracking-wider mt-10 p-3 text-tertiary_light">
          More
          <span className="bg-tertiary_light/90 dark:bg-tertiary_dark/90 rounded-md p-2 text-secondary">
            {strDrinkCategory}
          </span>
          {""}
          Drinks
        </h2>
        <ul>
          <SliderV
            slidesToShow={4}
            slidesToScroll={3}
            slidesToShow400={2}
            slidesToScroll400={2}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
          >
            {similarDrinkCategory?.map((cocktail: CocktailType) => {
              return (
                <SimilarCocktailCategoryItem
                  drink={cocktail}
                  key={cocktail.idDrink}
                />
              );
            })}
          </SliderV>
        </ul>
      </section>

      <section>
        <h2 className="md:text-3xl flex gap-2  items-center uppercase dark:text-secondary  tracking-wider mt-10 p-3 text-tertiary_light">
          More
          <span className="bg-tertiary_light/90 dark:bg-tertiary_dark/90 rounded-md p-2 text-secondary">
            {strGlass}
          </span>
          {""}
          Drinks
        </h2>
        <ul>
          {similarDrinkGlass?.length <= 1 ? (
            <>dsf</>
          ) : (
            <SliderV
              slidesToShow={
                similarDrinkGlass?.length >= 4 ? 4 : similarDrinkGlass?.length
              }
              slidesToScroll={
                similarDrinkGlass?.length >= 3 ? 4 : similarDrinkGlass?.length
              }
              slidesToShow400={2}
              slidesToScroll400={2}
            >
              {similarDrinkGlass?.map((glass: CocktailType) => {
                return (
                  <SimilarCocktailGlassItem drink={glass} key={glass.idDrink} />
                );
              })}
            </SliderV>
          )}
        </ul>
      </section>

      <section>
        <h2 className="md:text-3xl flex gap-2 dark:text-secondary items-center uppercase tracking-wider mt-10 p-3 text-tertiary_light">
          More
          <span className="bg-tertiary_light/90 dark:bg-tertiary_dark/90 rounded-md p-2 text-secondary">
            {strAlcoholic}
          </span>
          {""}
          Drinks
        </h2>
        <ul>
          <SliderV
            slidesToShow={
              similarDrinkAlcoholic?.length >= 4
                ? 4
                : similarDrinkAlcoholic?.length
            }
            slidesToScroll={
              similarDrinkAlcoholic?.length >= 3
                ? 4
                : similarDrinkAlcoholic?.length
            }
            slidesToShow400={2}
            slidesToScroll400={2}
          >
            {similarDrinkAlcoholic?.map((category: CocktailType) => {
              return (
                <SimilarCocktailAlcoholicItem
                  drink={category}
                  key={category.idDrink}
                />
              );
            })}
          </SliderV>
        </ul>
      </section>
    </div>
  );
}

export default DrinkDetailItem;
