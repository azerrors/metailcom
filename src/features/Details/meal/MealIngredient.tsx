import { useQuery } from "@tanstack/react-query";
import { getMealByIngredient } from "../../../services/mealApi/mealMain";
import SliderV from "../../../ui/SliderV";
import { MealTypes } from "../../../ui/List";
import SimilarMealItem from "./SimilarMealItem";

type MealIngredientProps = {
  ingredient: string;
};

function MealIngredient({ ingredient }: MealIngredientProps) {
  const { data: similarIngredient } = useQuery({
    queryKey: ["ingredient", ingredient],
    queryFn: () => getMealByIngredient(ingredient),
  });

  return (
    <section>
      <h2 className="text-3xl flex gap-2  items-center uppercase tracking-wider mt-10 p-3 text-tertiary">
        More
        <span className="bg-tertiary/90 rounded-md p-2 text-secondary">
          {ingredient}
        </span>
        {""}
        Meals
      </h2>
      <ul>
        <SliderV
          slidesToShow={
            similarIngredient?.length >= 4
              ? 4
              : similarIngredient?.length
              ? similarIngredient?.length === 1
                ? 1
                : 1
              : 1
          }
          slidesToScroll={
            similarIngredient?.length >= 3 ? 4 : similarIngredient?.length
          }
          slidesToShow400={1}
          slidesToScroll400={1}
        >
          {similarIngredient?.map((category: MealTypes) => {
            return <SimilarMealItem meal={category} key={category.idMeal} />;
          })}
        </SliderV>
      </ul>
    </section>
  );
}

export default MealIngredient;
