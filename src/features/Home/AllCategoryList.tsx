import SliderV from "../../ui/SliderV";
import AllCategory from "./AllCategory";

export type AllCategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

type CategoryProps = {
  category: AllCategoryType[];
};

function AllCategoryList({ category }: CategoryProps) {
  return (
    <ul className="my-10">
      <SliderV
        slidesToShow={6}
        slidesToScroll={3}
        slidesToShow400={3}
        slidesToScroll400={3}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={true}
      >
        {category?.map((category) => {
          return <AllCategory category={category} key={category.idCategory} />;
        })}
      </SliderV>
    </ul>
  );
}

export default AllCategoryList;
