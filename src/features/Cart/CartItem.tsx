import { useState } from "react";
import { FavoritesType, useMainContext } from "../../context/main-context";
import { FaTrashAlt } from "react-icons/fa";

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
    strCategory,
  } = item;
  const { dispatch, cart } = useMainContext();
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

  return (
    <div className=" border-4 flex items-center justify-between gap-7  hover:bg-tertiary/10 hover:-skew-x-2 transition-all duration-300 ">
      <div className="flex gap-6 p-2">
        <img
          src={strDrinkThumb ? strDrinkThumb : strMealThumb}
          alt=""
          className="md:w-28 w-16  rounded-lg"
        />
        <div className="p-2 flex flex-col justify-between">
          <h4 className="md:text-xl font-medium tracking-wider ">
            {strDrink ? strDrink : strMeal}
          </h4>
          <FaTrashAlt
            onClick={() =>
              dispatch({
                type: "ACTION_DELETE_CART",
                payload: idDrink ? idDrink : idMeal ? idMeal : "",
              })
            }
            className="md:text-2xl text-tertiary cursor-pointer hover:text-red-800 transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex flex-col px-10">
        <button onClick={increaseValue}>+</button>
        <p>{number}</p>
        <button onClick={decreaseValue}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
