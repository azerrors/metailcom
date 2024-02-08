import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import { CocktailType } from "./PopularDrinksList";

type PopularDrinkProps = {
  cocktail: CocktailType;
};

function PopularDrink({ cocktail }: PopularDrinkProps) {
  const { dispatch, favorites } = useMainContext();

  const { idDrink, strDrink, strDrinkThumb, strCategory } = cocktail;

  const isShow = favorites.some((fav) => fav.idDrink === idDrink);

  function handleAdd() {
    dispatch({
      type: "ACTION_ADD_FAVORITE",
      payload: {
        number: 1,
        idDrink,
        strCategory,
        strDrink,
        strDrinkThumb,
      },
    });
  }

  return (
    <div className="border-stone-200 border shadow-lg relative transition-all duration-300 hover:-translate-y-3 active:translate-y-1 hover:scale-[1.01] ">
      <Link to={`/${idDrink}?idDrink=${idDrink}`}>
        <div>
          <img
            src={strDrinkThumb}
            alt=""
            className="md:w-64 md:h-60 w-40 h-40"
          />
        </div>
        <div className="md:py-5 py-2 px-3">
          <h2 className="text-xl tracking-wider ">{strDrink}</h2>
        </div>
      </Link>
      <div className="absolute cursor-pointer   right-0 top-1 p-1   ">
        {!isShow ? (
          <BsHeart
            className="text-red-700 hover:-translate-y-2 active:translate-y-1 transition-all duration-300 text-3xl z-50"
            onClick={handleAdd}
          />
        ) : (
          <BsHeartFill
            className="text-red-700  hover:-translate-y-2 active:translate-y-1  transition-all duration-300 text-3xl z-50"
            onClick={() =>
              dispatch({
                type: "ACTION_DELETE_FAVORITE",
                payload: idDrink,
              })
            }
          />
        )}
      </div>
    </div>
  );
}

export default PopularDrink;
