import { Link } from "react-router-dom";
import { CocktailType } from "../../Home/PopularDrinksList";

type SimilarCocktailAlcoholicItemProps = {
  drink: CocktailType;
};

function SimilarCocktailAlcoholicItem({
  drink,
}: SimilarCocktailAlcoholicItemProps) {
  const { idDrink, strDrinkThumb, strDrink } = drink;
  return (
    <div className="mt-5 mx-2 relative rounded-md hover:scale-[1.01] transition-all duration-300 hover:-translate-y-2 ">
      <Link to={`/${idDrink}?idDrink=${idDrink}`}>
        <div>
          <img src={strDrinkThumb} alt="" className="rounded-md w-full" />
          <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <h2 className="md:text-lg text-sm w-36 absolute truncate text-secondary bottom-2 left-2 font-medium">
          {strDrink}
        </h2>
      </Link>
    </div>
  );
}

export default SimilarCocktailAlcoholicItem;
