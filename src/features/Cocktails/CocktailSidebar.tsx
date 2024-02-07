import { MdOutlineCloseFullscreen } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import { BsArrowRightShort } from "react-icons/bs";

type CocktailSidebarProps = {
  category: { strCategory: string }[];
  glass: { strGlass: string }[];
  alcoholic: { strAlcoholic: string }[];
  ingredient: { strIngredient1: string }[];
};

function CocktailSidebar({
  category,
  glass,
  alcoholic,
  ingredient,
}: CocktailSidebarProps) {
  const { dispatch } = useMainContext();

  return (
    <div className="absolute top-0  bg-secondary   overflow-y-hidden w-full z-50">
      <section
        className="flex justify-end p-1 fixed top-0 right-0"
        onClick={() => dispatch({ type: "ACTION_CLOSE_COCKTAIL_SIDEBAR" })}
      >
        <MdOutlineCloseFullscreen className="text-2xl" />
      </section>

      <div className="flex flex-col mt-5 gap-10">
        <section>
          <div className="px-10 ">
            <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
              CATEGORY
            </h3>
            <ul className="grid grid-cols-2 gap-8">
              {category?.map((category: { strCategory: string }) => {
                return (
                  <Link
                    to="category"
                    key={category.strCategory}
                    onClick={() =>
                      dispatch({
                        type: "ACTION_GET_COCKTAIL_CATEGORY",
                        payload: category.strCategory,
                      })
                    }
                    className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                  >
                    {category.strCategory}
                    <BsArrowRightShort />
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <div className="px-10 ">
            <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
              GLASS
            </h3>
            <ul className="grid grid-cols-2 gap-8">
              {glass?.map((glass: { strGlass: string }) => {
                return (
                  <Link
                    to="glass"
                    key={glass.strGlass}
                    onClick={() =>
                      dispatch({
                        type: "ACTION_GET_COCKTAIL_GLASS",
                        payload: glass.strGlass,
                      })
                    }
                    className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                  >
                    {glass.strGlass}
                    <BsArrowRightShort />
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <div className="px-10 ">
            <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
              ALCOHOL
            </h3>
            <ul className="grid grid-cols-2 gap-8">
              {alcoholic?.map((alcohol: { strAlcoholic: string }) => {
                return (
                  <Link
                    to="alcohol"
                    key={alcohol.strAlcoholic}
                    onClick={() =>
                      dispatch({
                        type: "ACTION_GET_COCKTAIL_ALCOHOL",
                        payload: alcohol.strAlcoholic,
                      })
                    }
                    className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                  >
                    {alcohol.strAlcoholic}
                    <BsArrowRightShort />
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <div className="px-10 ">
            <h3 className="text-xl font-medium mb-5 border-b border-tertiary">
              INGREDIENT
            </h3>
            <ul className="grid grid-cols-2 gap-8">
              {ingredient?.map((ingredient: { strIngredient1: string }) => {
                return (
                  <Link
                    to="ingredient"
                    key={ingredient.strIngredient1}
                    onClick={() =>
                      dispatch({
                        type: "ACTION_GET_COCKTAIL_INGREDIENT",
                        payload: ingredient.strIngredient1,
                      })
                    }
                    className="hover:border-b cursor-pointer flex items-center justify-between  border-tertiary"
                  >
                    {ingredient.strIngredient1}
                    <BsArrowRightShort />
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CocktailSidebar;
