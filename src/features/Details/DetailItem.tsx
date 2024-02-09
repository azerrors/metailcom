import { useQuery } from "@tanstack/react-query";

import {
  getMealByArea,
  getMealByCategory,
} from "../../services/mealApi/mealMain";

import { BsCart2, BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import { useMainContext } from "../../context/main-context";
import {
  getCocktailsByAlcohol,
  getCocktailsByCategory,
  getCocktailsByGlass,
} from "../../services/cocktailApi/cocktailMain";
import { MealTypes } from "../../ui/List";
import SliderV from "../../ui/SliderV";
import { CocktailType } from "../Home/PopularDrinksList";
import SimilarCocktailAlcoholicItem from "./drink/SimilarCocktailAlcoholicItem";
import SimilarCocktailCategoryItem from "./drink/SimilarCocktailCategoryItem";
import SimilarCocktailGlassItem from "./drink/SimilarCocktailGlassItem";
import SimilarMealItem from "./meal/SimilarMealItem";

type Props = {
  meal?: MealTypes;
  cocktail?: CocktailType;
};

function DetailItem({ meal, cocktail }: Props) {
  // const [ingredient, setIngredient] = useState<string[]>([]);

  const {
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient4,
    strIngredient5,
    strIngredient3,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strMeasure1,
    strMeasure2,
    strMeasure4,
    strMeasure5,
    strMeasure3,
    strMeasure6,
    strMeasure7,
    strMeasure8,
  } = meal || {};

  const {
    idDrink,
    strAlcoholic,
    strCategory: strDrinkCategory,
    strDrinkThumb,
    strDrink,
    strGlass,
    strInstructions: strDrinkInstructions,
    strIngredient1: strDrinkIngredient1,
    strIngredient2: strDrinkIngredient2,
    strIngredient4: strDrinkIngredient3,
    strIngredient5: strDrinkIngredient4,
    strIngredient3: strDrinkIngredient5,
    strIngredient6: strDrinkIngredient6,
    strIngredient7: strDrinkIngredient7,
    strIngredient8: strDrinkIngredient8,
    strMeasure1: strDrinkMeasure1,
    strMeasure2: strDrinkMeasure2,
    strMeasure4: strDrinkMeasure3,
    strMeasure5: strDrinkMeasure4,
    strMeasure3: strDrinkMeasure5,
    strMeasure6: strDrinkMeasure6,
    strMeasure7: strDrinkMeasure7,
    strMeasure8: strDrinkMeasure8,
  } = cocktail || {};

  const imageStyle = "mb-4 md:mx-2 md:max-w-32 ";
  const h3Style = "text-center dark:text-secondary font-semibold text-sm";

  // useEffect(() => {
  //   setIngredient([
  //     strIngredient1 ? strIngredient1 : "",
  //     strIngredient2 ? strIngredient2 : "",
  //     strIngredient3 ? strIngredient3 : "",
  //     strIngredient4 ? strIngredient4 : "",
  //     strIngredient5 ? strIngredient5 : "",
  //     strIngredient6 ? strIngredient6 : "",
  //     strIngredient7 ? strIngredient7 : "",
  //     strIngredient8 ? strIngredient8 : "",
  //   ]);
  //   // No need for a cleanup function in this case
  // }, [
  //   strIngredient1,
  //   strIngredient2,
  //   strIngredient3,
  //   strIngredient4,
  //   strIngredient5,
  //   strIngredient6,
  //   strIngredient7,
  //   strIngredient8,
  // ]);

  const { data: similarCategories } = useQuery({
    queryKey: ["categoryMeal", strCategory],
    queryFn: () => getMealByCategory(strCategory ? strCategory : ""),
  });
  const { data: similarArea } = useQuery({
    queryKey: ["areaMeal", strArea],
    queryFn: () => getMealByArea(strArea ? strArea : ""),
  });
  //----------------------------------------------------------------

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

  const { cart, dispatch, favorites } = useMainContext();

  const isCart = cart.some(
    (fav) => fav.idDrink === idDrink && fav.idMeal === idMeal
  );

  const isFav = favorites.some(
    (fav) => fav.idDrink === idDrink && fav.idMeal === idMeal
  );

  const addToCart = () => {
    dispatch({
      type: "ACTION_ADD_CART",
      payload: {
        idDrink,
        number: 1,
        idMeal,
        strDrinkThumb,
        strMealThumb,
        strDrink,
        strMeal,
        strCategory,
      },
    });

    toast.success(`|${strDrink ? strDrink : strMeal}| Added To Cart Basket`, {
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
      payload: idDrink ? idDrink : idMeal ? idMeal : "",
    });

    toast.error(`|${strDrink ? strDrink : strMeal}| Deleted from Cart Basket`, {
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
        idMeal,
        strCategory,
        strMeal,
        strMealThumb,
      },
    });
    toast.success(`|${strMeal}| Added To Favorite List`, {
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
      payload: idDrink ? idDrink : idMeal ? idMeal : "",
    });
    toast.error(`|${strMeal}| Deleted To Favorite List`, {
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

  if (meal) {
    return (
      <div className="mt-16 overflow-x-hidden ">
        <section className="flex flex-col md:flex-row md:border  border-stone-300">
          <div className="md:w-[60%]">
            <img
              src={strMealThumb}
              alt=""
              className="md:min-h-[34rem] h-96 md:max-h-[40rem] w-full"
            />
          </div>
          <div className="md:w-[40%]">
            <div className="px-10">
              <h2 className="md:text-3xl dark:text-secondary text-xl tracking-widest pt-10 font-semibold text-stone-700">
                {strMeal}
              </h2>
              <div className="pb-5 flex gap-2 dark:text-stone-500 ">
                <h4>{strCategory}</h4>/<h4>{strArea}</h4>
              </div>
              <p className="md:text-sm text-xs dark:text-secondary">
                {strInstructions}
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-end mt-5 gap-5 ">
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
          <h2 className="md:text-3xl mb-8 uppercase tracking-wider mt-20 dark:bg-tertiary_dark/70 bg-tertiary_light/70 p-3 text-secondary">
            Ingredients
          </h2>

          <div className=" mt-4 flex-wrap justify-center hidden md:flex gap-2 bg-tertiary_light/10 dark:bg-tertiary_dark/10 p-2">
            {strIngredient1 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient1}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient1}</h3>
                <h3 className={h3Style}>{strMeasure1}</h3>
              </div>
            )}
            {strIngredient2 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient2}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient2}</h3>
                <h3 className={h3Style}>{strMeasure2}</h3>
              </div>
            )}
            {strIngredient3 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient3}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient3}</h3>
                <h3 className={h3Style}>{strMeasure3}</h3>
              </div>
            )}
            {strIngredient4 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient4}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient4}</h3>
                <h3 className={h3Style}>{strMeasure4}</h3>
              </div>
            )}
            {strIngredient5 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient5}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient5}</h3>
                <h3 className={h3Style}>{strMeasure5}</h3>
              </div>
            )}
            {strIngredient6 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient6}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient6}</h3>
                <h3 className={h3Style}>{strMeasure6}</h3>
              </div>
            )}
            {strIngredient7 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient7}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient7}</h3>
                <h3 className={h3Style}>{strMeasure7}</h3>
              </div>
            )}
            {strIngredient8 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strIngredient8}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strIngredient8}</h3>
                <h3 className={h3Style}>{strMeasure8}</h3>
              </div>
            )}
          </div>

          <div className="  md:hidden p-3">
            <SliderV
              slidesToShow400={2}
              slidesToScroll400={2}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
            >
              {strIngredient1 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient1}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient1}</h3>
                  <h3 className={h3Style}>{strMeasure1}</h3>
                </div>
              )}
              {strIngredient2 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient2}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient2}</h3>
                  <h3 className={h3Style}>{strMeasure2}</h3>
                </div>
              )}
              {strIngredient3 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient3}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient3}</h3>
                  <h3 className={h3Style}>{strMeasure3}</h3>
                </div>
              )}
              {strIngredient4 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient4}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient4}</h3>
                  <h3 className={h3Style}>{strMeasure4}</h3>
                </div>
              )}
              {strIngredient5 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient5}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient5}</h3>
                  <h3 className={h3Style}>{strMeasure5}</h3>
                </div>
              )}
              {strIngredient6 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient6}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient6}</h3>
                  <h3 className={h3Style}>{strMeasure6}</h3>
                </div>
              )}
              {strIngredient7 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient7}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient7}</h3>
                  <h3 className={h3Style}>{strMeasure7}</h3>
                </div>
              )}
              {strIngredient8 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient8}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strIngredient8}</h3>
                  <h3 className={h3Style}>{strMeasure8}</h3>
                </div>
              )}
            </SliderV>
          </div>
        </section>

        <section>
          <h2 className="md:text-3xl flex gap-2  items-center uppercase tracking-wider mt-10 p-3 text-tertiary_light dark:text-secondary">
            More
            <span className="bg-tertiary_light/90  dark:bg-tertiary_dark/90 rounded-md p-2 text-secondary">
              {strCategory}
            </span>
            {""}
            Meals
          </h2>
          <ul>
            <SliderV
              slidesToShow={4}
              slidesToScroll={3}
              slidesToShow400={2}
              slidesToScroll400={2}
            >
              {similarCategories?.map((category: MealTypes) => {
                return (
                  <SimilarMealItem meal={category} key={category.idMeal} />
                );
              })}
            </SliderV>
          </ul>
        </section>

        <section>
          <h2 className="md:text-3xl flex gap-2  items-center uppercase tracking-wider mt-10 p-3 text-tertiary_light/90 dark:text-secondary">
            More
            <span className="bg-tertiary_light/90  dark:bg-tertiary_dark/90 rounded-md p-2 text-secondary">
              {strArea}
            </span>
            {""}
            Meals
          </h2>
          <ul>
            <SliderV
              slidesToShow={similarArea?.length >= 4 ? 4 : similarArea?.length}
              slidesToScroll={
                similarArea?.length >= 3 ? 4 : similarArea?.length
              }
              slidesToShow400={2}
              slidesToScroll400={2}
            >
              {similarArea?.map((category: MealTypes) => {
                return (
                  <SimilarMealItem meal={category} key={category.idMeal} />
                );
              })}
            </SliderV>
          </ul>
        </section>

        {/* {ingredient?.map((ingredient, index) => {
          return <MealIngredient ingredient={ingredient} key={index} />;
        })} */}
      </div>
    );
  }

  if (cocktail) {
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
          <h2 className="md:text-3xl uppercase tracking-wider mt-20 bg-tertiary_light/70 dark:bg-tertiary_dark/70 p-3 text-secondary">
            Ingredients
          </h2>
          <div className="md:flex hidden flex-wrap justify-center mt-4 dark:bg-tertiary_dark/10  bg-tertiary_light/10 p-2">
            {strDrinkIngredient1 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient1}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient1}</h3>
                <h3 className={h3Style}>{strDrinkMeasure1}</h3>
              </div>
            )}
            {strDrinkIngredient2 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient2}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient2}</h3>
                <h3 className={h3Style}>{strDrinkMeasure2}</h3>
              </div>
            )}
            {strDrinkIngredient3 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient3}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient3}</h3>
                <h3 className={h3Style}>{strDrinkMeasure3}</h3>
              </div>
            )}
            {strDrinkIngredient4 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient4}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient4}</h3>
                <h3 className={h3Style}>{strDrinkMeasure4}</h3>
              </div>
            )}
            {strDrinkIngredient5 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient5}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient5}</h3>
                <h3 className={h3Style}>{strDrinkMeasure5}</h3>
              </div>
            )}
            {strDrinkIngredient6 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient6}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient6}</h3>
                <h3 className={h3Style}>{strDrinkMeasure6}</h3>
              </div>
            )}
            {strDrinkIngredient7 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient7}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient7}</h3>
                <h3 className={h3Style}>{strDrinkMeasure7}</h3>
              </div>
            )}
            {strDrinkIngredient8 && (
              <div>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient8}.png`}
                  alt=""
                  className={imageStyle}
                />
                <h3 className={h3Style}>{strDrinkIngredient8}</h3>
                <h3 className={h3Style}>{strDrinkMeasure8}</h3>
              </div>
            )}
          </div>

          <div className="md:hidden p-3">
            <SliderV
              slidesToShow400={2}
              slidesToScroll400={2}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
            >
              {strDrinkIngredient1 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient1}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient1}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure1}</h3>
                </div>
              )}
              {strDrinkIngredient2 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient2}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient2}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure2}</h3>
                </div>
              )}
              {strDrinkIngredient3 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient3}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient3}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure3}</h3>
                </div>
              )}
              {strDrinkIngredient4 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient4}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient4}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure4}</h3>
                </div>
              )}
              {strDrinkIngredient5 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient5}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient5}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure5}</h3>
                </div>
              )}
              {strDrinkIngredient6 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient6}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient6}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure6}</h3>
                </div>
              )}
              {strDrinkIngredient7 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient7}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient7}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure7}</h3>
                </div>
              )}
              {strDrinkIngredient8 && (
                <div>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient8}.png`}
                    alt=""
                    className={imageStyle}
                  />
                  <h3 className={h3Style}>{strDrinkIngredient8}</h3>
                  <h3 className={h3Style}>{strDrinkMeasure8}</h3>
                </div>
              )}
            </SliderV>
          </div>
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
                  similarDrinkGlass?.length >= 4 ? 4 : similarArea?.length
                }
                slidesToScroll={
                  similarDrinkGlass?.length >= 3 ? 4 : similarArea?.length
                }
                slidesToShow400={2}
                slidesToScroll400={2}
              >
                {similarDrinkGlass?.map((glass: CocktailType) => {
                  return (
                    <SimilarCocktailGlassItem
                      drink={glass}
                      key={glass.idDrink}
                    />
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
}

export default DetailItem;
