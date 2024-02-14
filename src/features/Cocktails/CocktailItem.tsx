import { Link } from "react-router-dom";
import { CocktailType } from "../Home/PopularDrinksList";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useMainContext } from "../../context/main-context";
import { toast } from "react-toastify";

type CocktailItemProps = {
  cocktail: CocktailType;
};

function CocktailItem({ cocktail }: CocktailItemProps) {
  const { strDrink, strDrinkThumb, idDrink, strCategory } = cocktail;

  const { dispatch, favorites } = useMainContext();

  const isShow = favorites.some((fav) => fav.idDrink === idDrink);

  const addToFavorite = () => {
    dispatch({
      type: "ACTION_ADD_FAVORITE",
      payload: {
        idDrink,
        strCategory,
        number: 1,
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

    toast.error(`|${strDrink}| Deleted from Favorite List`, {
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
    <div className="md:mt-5 mt-7 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
      <Link to={`/${idDrink}?idDrink=${idDrink}`}>
        <div>
          <img src={strDrinkThumb} alt="" className="rounded-md w-36 md:w-56" />
          <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <h2 className="md:text-xl w-28 md:w-48 truncate text-md absolute text-secondary bottom-2 left-2 font-medium">
          {strDrink}
        </h2>
        <h4 className="absolute text-secondary/50 bottom-7  md:bottom-8 left-2 text-sm md:text-md">
          {strCategory}
        </h4>
      </Link>

      <div className="absolute cursor-pointer   right-0 bottom-1 p-1   ">
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

export default CocktailItem;
