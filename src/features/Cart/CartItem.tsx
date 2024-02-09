import { useState } from "react";
import { FavoritesType, useMainContext } from "../../context/main-context";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

type CartItemProps = {
  item: FavoritesType;
};

function CartItem({ item }: CartItemProps) {
  const {
    idDrink,
    idMeal,
    strDrinkThumb,
    strMealThumb,
    strDrink,
    strMeal,
    number,
  } = item;
  const { dispatch } = useMainContext();
  const [currentNumber, setCurrentNumber] = useState(1);

  function increaseValue() {
    setCurrentNumber((curr) => curr + 1);
    dispatch({
      type: "ACTION_ADD_CART_NUMBER",
      payload: {
        id: idDrink ? idDrink : idMeal ? idMeal : "",
      },
    });
  }
  function decreaseValue() {
    if (currentNumber > 0) {
      dispatch({
        type: "ACTION_DELETE_CART_NUMBER",
        payload: {
          id: idDrink ? idDrink : idMeal ? idMeal : "",
        },
      });
    }
  }

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
  return (
    <div className=" border-4 dark:border-tertiary_dark flex items-center justify-between gap-7  hover:bg-tertiary_light/10 dark:hover:bg-tertiary_dark/10 hover:-skew-x-2 transition-all duration-300 ">
      <div className="flex gap-6 p-2">
        <Link
          to={`/${idMeal ? idMeal : idDrink}?${idMeal ? "idMeal" : "idDrink"}=${
            idMeal ? idMeal : idDrink
          }`}
          className="flex justify-between md:gap-80 gap-5"
        >
          <img
            src={strDrinkThumb ? strDrinkThumb : strMealThumb}
            alt=""
            className="md:w-28 w-16  rounded-lg"
          />
        </Link>
        <div className="p-2 flex flex-col justify-between">
          <h4 className="md:text-xl font-medium dark:text-secondary tracking-wider ">
            {strDrink ? strDrink : strMeal}
          </h4>
          <FaTrashAlt
            onClick={deleteFromCart}
            className="md:text-2xl text-red-600 cursor-pointer hover:text-red-800 transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex dark:text-secondary flex-col px-10">
        <button onClick={increaseValue}>+</button>
        <p>{number}</p>
        <button onClick={decreaseValue}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
