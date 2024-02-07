import ListElement from "./ListElement";
import SkeletonUi from "./SkeletonUi";
import SliderV from "./SliderV";
export type MealTypes = {
  dateModified: string;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrinkAlternate: string;
  strImageSource: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
};
export type AllMealCategoryType = {
  idCategory?: string;
  strCategory?: string;
  strCategoryDescription?: string;
  strCategoryThumb?: string;
};
type ListProps = {
  meal: MealTypes[];
  loading: boolean;
  type: string;
  // mealAllCategory: AllMealCategoryType[];
};

function List({ meal, loading, type }: ListProps) {
  if (type === "list1") {
    return (
      <ul>
        <SliderV
          slidesToShow={3}
          slidesToScroll={3}
          slidesToShow400={2}
          slidesToScroll400={2}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {meal?.map((datas) => {
            return <ListElement meal={datas} type={type} key={datas.idMeal} />;
          })}
        </SliderV>
      </ul>
    );
  }
}

export default List;
