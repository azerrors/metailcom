import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getMealByID } from "../services/mealApi/mealMain";

import DetailList from "../features/Details/DetailList";
import { getCocktailByID } from "../services/cocktailApi/cocktailMain";

function Details() {
  const [searchParam] = useSearchParams();
  const idDrink = searchParam.get("idDrink");
  const idMeal = searchParam.get("idMeal");

  const { data: meal, } = useQuery({
    queryKey: ["cocktailDetail", idMeal],
    queryFn: () => getMealByID(idMeal!.toString()),
  });

  const { data: cocktail , status: mealLoading  } = useQuery({
    queryKey: ["cocktailDetail", idDrink],
    queryFn: () => getCocktailByID(idDrink!.toString()),
  });

  if (meal) {
    return (
      <div className="md:mx-72 ">
        <DetailList meal={meal} mealLoading = {mealLoading} />
      </div>
    );
  }
  if (cocktail) {
    return (
      <div className="md:mx-72 ">
        <DetailList cocktail={cocktail} />
      </div>
    );
  }
}

export default Details;
