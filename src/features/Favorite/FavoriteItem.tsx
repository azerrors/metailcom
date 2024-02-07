import { BsCart2 } from "react-icons/bs";
import { FavoritesType, useMainContext } from "../../context/main-context";

import { Link } from "react-router-dom";

type FavoriteItemProps = {
  item: FavoritesType;
};

function FavoriteItem({ item }: FavoriteItemProps) {
  const {
    strDrinkThumb,
    strMealThumb,
    idDrink,
    idMeal,
    strMeal,
    strCategory,
    strDrink,
  } = item;
  const { dispatch } = useMainContext();
  return (
    <div className="flex hover:bg-tertiary/10 hover:-skew-x-2 transition-all duration-300 justify-between p-5 gap-5 border-b border-tertiary">
      <div>
        <Link
          to={`/${idMeal ? idMeal : idDrink}?${idMeal ? "idMeal" : "idDrink"}=${
            idMeal ? idMeal : idDrink
          }`}
          className="flex justify-between md:gap-80 gap-5"
        >
          <div>
            <img
              src={strDrinkThumb ? strDrinkThumb : strMealThumb}
              alt=""
              className="md:w-32 w-20 rounded-md "
            />
          </div>

          <div>
            <div>
              <h4 className="md:text-xl w-16 font-medium truncate">
                {strDrink ? strDrink : strMeal}
              </h4>
              <p className="text-sm w-16 text-stone-500 truncate">{strCategory}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5">
        <button className="flex items-center gap-2 bg-tertiary hover:skew-x-2 text-xs hover:skew-y-1 transition-all duration-300 uppercase md:text-xl font-medium md:p-2 p-1 text-secondary rounded-md">
          add to basket <BsCart2 />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "ACTION_DELETE_FAVORITE",
              payload: idDrink ? idDrink : idMeal ? idMeal : "",
            });
          }}
          className="text-tertiary uppercase md:text-md text-xs font-medium tracking-wider hover:bg-red-300 rounded-md transition-all md:p-2 p-1 duration-300"
        >
          delete from list
        </button>
      </div>
    </div>
  );
}

export default FavoriteItem;
