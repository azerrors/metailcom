import { Link } from "react-router-dom";
import { CocktailType } from "./PopularDrinksList";

type PopularDrinkProps = {
  cocktail: CocktailType;
};

function PopularDrink({ cocktail }: PopularDrinkProps) {
  const { idDrink, strDrink, strDrinkThumb } = cocktail;
  return (
    <Link
      to={`/${idDrink}?idDrink=${idDrink}`}
      className="border-stone-200 border shadow-lg transition-all duration-300 hover:-translate-y-3 active:translate-y-1 hover:scale-[1.01] "
    >
      <div>
        <img src={strDrinkThumb} alt="" className="md:w-64 md:h-60 w-40 h-40" />
      </div>
      <div className="md:py-5 py-2 px-3">
        <h2 className="text-xl tracking-wider ">{strDrink}</h2>
      </div>
    </Link>
  );
}

export default PopularDrink;
