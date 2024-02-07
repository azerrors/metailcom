import { Link } from "react-router-dom";
import { CocktailType } from "../Home/PopularDrinksList";

type CocktailItemProps = {
  cocktail: CocktailType;
};

function CocktailItem({ cocktail }: CocktailItemProps) {
  const { strDrink, strDrinkThumb, idDrink, strCategory } = cocktail;
  return (
    <div className="md:mt-5 mt-7 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
    <Link to={`/${idDrink}?idDrink=${idDrink}`}>
      <div>
        <img src={strDrinkThumb} alt="" className="rounded-md w-36 md:w-56" />
        <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <h2 className="md:text-2xl text-md absolute text-secondary bottom-2 left-2 font-medium">
        {strDrink}
      </h2>
      <h4 className="absolute bottom-7 md:bottom-9 left-2 md:text-lg text-sm text-secondary/50">
        {strCategory}
      </h4>
    </Link>
  </div>
  );
}

export default CocktailItem;
