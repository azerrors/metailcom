import { useQuery } from "@tanstack/react-query";
import { BsCart2, BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import { useMainContext } from "../../../context/main-context";
import {
  getMealByArea,
  getMealByCategory,
} from "../../../services/mealApi/mealMain";
import { MealTypes } from "../../../ui/List";
import SliderV from "../../../ui/SliderV";
import MealIng from "./MealIng";
import SimilarMealItem from "./SimilarMealItem";

type Props = {
  meal: MealTypes;
};

function MealDetailItem({ meal }: Props) {
  const { cart, dispatch, favorites } = useMainContext();

  const {
    idMeal,
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
  } = meal || {};

  const { data: similarCategories } = useQuery({
    queryKey: ["categoryMeal", strCategory],
    queryFn: () => getMealByCategory(strCategory ? strCategory : ""),
  });
  const { data: similarArea } = useQuery({
    queryKey: ["areaMeal", strArea],
    queryFn: () => getMealByArea(strArea ? strArea : ""),
  });

  const isCart = cart.some((fav) => fav.idMeal === idMeal);

  const isFav = favorites.some((fav) => fav.idMeal === idMeal);

  const addToCart = () => {
    dispatch({
      type: "ACTION_ADD_CART",
      payload: {
        number: 1,
        idMeal,
        strMealThumb,
        strMeal,
        strCategory,
      },
    });

    toast.success(`|${strMeal}| Added To Cart Basket`, {
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
      payload: idMeal,
    });

    toast.error(`|${strMeal}| Deleted from Cart Basket`, {
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
      payload: idMeal,
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
  // if (mealLoading === "pending") {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );
  // }

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
        <MealIng meal={meal} />
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
              return <SimilarMealItem meal={category} key={category.idMeal} />;
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
            slidesToScroll={similarArea?.length >= 3 ? 4 : similarArea?.length}
            slidesToShow400={2}
            slidesToScroll400={2}
          >
            {similarArea?.map((category: MealTypes) => {
              return <SimilarMealItem meal={category} key={category.idMeal} />;
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

export default MealDetailItem;
