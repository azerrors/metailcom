import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main-context";
import { MealTypes } from "./List";
import { toast } from "react-toastify";

type ListElementProps = {
  meal: MealTypes;
  type: string;
};

function ListElement({ meal, type }: ListElementProps) {
  const { dispatch, favorites } = useMainContext();

  if (type === "list1") {
    const { strMeal, strMealThumb, idMeal, strCategory } = meal;
    const isShow = favorites.some((fav) => fav.idMeal === idMeal);

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
    return (
      <div className="mt-5 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
        <Link to={`/${idMeal}?idMeal=${idMeal}`}>
          <div>
            <img
              src={strMealThumb}
              alt=""
              className="rounded-md object-center object-cover"
            />
            <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <h2 className="md:text-2xl text-lg absolute text-secondary bottom-2 left-2 font-medium">
            {strMeal}
          </h2>
          <h4 className="absolute bottom-9 left-2 text-md md:text-lg text-secondary/50">
            {strCategory}
          </h4>
        </Link>{" "}
        <div className="absolute cursor-pointer   right-0 bottom-0 p-1   ">
          {!isShow ? (
            <BsHeart
              className="text-red-700 hover:-translate-y-2 active:translate-y-1 transition-all duration-300 text-3xl z-50"
              onClick={addToFavorite}
            />
          ) : (
            <BsHeartFill
              className="text-red-700  hover:-translate-y-2 active:translate-y-1  transition-all duration-300 text-3xl z-50"
              onClick={deleteFromFavorite}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ListElement;
