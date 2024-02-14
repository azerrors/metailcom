import SliderV from "../../../ui/SliderV";
import { CocktailType } from "../../Home/PopularDrinksList";

type DrinkIngredientProps = {
  drink: CocktailType;
};

function DrinkIngredient({ drink }: DrinkIngredientProps) {
  const imageStyle = "mb-4 md:mx-2 md:max-w-32 ";
  const h3Style = "text-center dark:text-secondary font-semibold text-sm";

  const {
    strIngredient1: strDrinkIngredient1,
    strIngredient2: strDrinkIngredient2,
    strIngredient4: strDrinkIngredient3,
    strIngredient5: strDrinkIngredient4,
    strIngredient3: strDrinkIngredient5,
    strIngredient6: strDrinkIngredient6,
    strIngredient7: strDrinkIngredient7,
    strIngredient8: strDrinkIngredient8,
    strMeasure1: strDrinkMeasure1,
    strMeasure2: strDrinkMeasure2,
    strMeasure4: strDrinkMeasure3,
    strMeasure5: strDrinkMeasure4,
    strMeasure3: strDrinkMeasure5,
    strMeasure6: strDrinkMeasure6,
    strMeasure7: strDrinkMeasure7,
    strMeasure8: strDrinkMeasure8,
  } = drink || {};
  return (
    <>
      {" "}
      <h2 className="md:text-3xl uppercase tracking-wider mt-20 bg-tertiary_light/70 dark:bg-tertiary_dark/70 p-3 text-secondary">
        Ingredients
      </h2>
      <div className="md:flex hidden flex-wrap justify-center mt-4 dark:bg-tertiary_dark/10  bg-tertiary_light/10 p-2">
        {strDrinkIngredient1 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient1}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient1}</h3>
            <h3 className={h3Style}>{strDrinkMeasure1}</h3>
          </div>
        )}
        {strDrinkIngredient2 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient2}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient2}</h3>
            <h3 className={h3Style}>{strDrinkMeasure2}</h3>
          </div>
        )}
        {strDrinkIngredient3 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient3}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient3}</h3>
            <h3 className={h3Style}>{strDrinkMeasure3}</h3>
          </div>
        )}
        {strDrinkIngredient4 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient4}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient4}</h3>
            <h3 className={h3Style}>{strDrinkMeasure4}</h3>
          </div>
        )}
        {strDrinkIngredient5 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient5}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient5}</h3>
            <h3 className={h3Style}>{strDrinkMeasure5}</h3>
          </div>
        )}
        {strDrinkIngredient6 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient6}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient6}</h3>
            <h3 className={h3Style}>{strDrinkMeasure6}</h3>
          </div>
        )}
        {strDrinkIngredient7 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient7}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient7}</h3>
            <h3 className={h3Style}>{strDrinkMeasure7}</h3>
          </div>
        )}
        {strDrinkIngredient8 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient8}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strDrinkIngredient8}</h3>
            <h3 className={h3Style}>{strDrinkMeasure8}</h3>
          </div>
        )}
      </div>
      <div className="md:hidden p-3">
        <SliderV
          slidesToShow400={2}
          slidesToScroll400={2}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {strDrinkIngredient1 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient1}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient1}</h3>
              <h3 className={h3Style}>{strDrinkMeasure1}</h3>
            </div>
          )}
          {strDrinkIngredient2 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient2}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient2}</h3>
              <h3 className={h3Style}>{strDrinkMeasure2}</h3>
            </div>
          )}
          {strDrinkIngredient3 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient3}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient3}</h3>
              <h3 className={h3Style}>{strDrinkMeasure3}</h3>
            </div>
          )}
          {strDrinkIngredient4 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient4}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient4}</h3>
              <h3 className={h3Style}>{strDrinkMeasure4}</h3>
            </div>
          )}
          {strDrinkIngredient5 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient5}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient5}</h3>
              <h3 className={h3Style}>{strDrinkMeasure5}</h3>
            </div>
          )}
          {strDrinkIngredient6 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient6}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient6}</h3>
              <h3 className={h3Style}>{strDrinkMeasure6}</h3>
            </div>
          )}
          {strDrinkIngredient7 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient7}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient7}</h3>
              <h3 className={h3Style}>{strDrinkMeasure7}</h3>
            </div>
          )}
          {strDrinkIngredient8 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strDrinkIngredient8}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strDrinkIngredient8}</h3>
              <h3 className={h3Style}>{strDrinkMeasure8}</h3>
            </div>
          )}
        </SliderV>
      </div>
      ;
    </>
  );
}

export default DrinkIngredient;
