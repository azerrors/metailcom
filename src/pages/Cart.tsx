import { useMainContext } from "../context/main-context";
import CartItem from "../features/Cart/CartItem";

function Cart() {
  const { cart } = useMainContext();
  const mappedNumbers = cart.map((cart) => cart.number);
  const currNum = mappedNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(currNum);
  return (
    <div className="md:mx-72 mt-10">
      <h3 className="md:text-3xl dark:text-secondary flex justify-between tracking-wider font-medium text-stone-900 border-b-2 p-2 border-tertiary_light dark:border-tertiary_dark rounded-md">
        Your Shopping Basket
      </h3>
      <div className="flex md:flex-row flex-col ">
        <div className="md:w-[60%] flex flex-col gap-4">
          {cart.map((cart) => {
            return (
              <CartItem
                item={cart}
                key={cart.idDrink ? cart.idDrink : cart.idMeal}
              />
            );
          })}
        </div>
        <div className="md:w-[40%] flex flex-col justify-between p-10 bg-tertiary_light/20 dark:bg-tertiary_dark/20  min-h-96">
          <span className="text-2xl dark:text-tertiary_light font-medium uppercase tracking-wider">
            total : {currNum}
          </span>
          <button className=" border p-3 bg-tertiary_light dark:bg-tertiary_dark rounded-md text-secondary uppercase font-medium hover:-skew-x-3 transition-all duration-300">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
