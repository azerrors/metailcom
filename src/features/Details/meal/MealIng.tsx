import { MealTypes } from "../../../ui/List";
import SliderV from "../../../ui/SliderV";

type MealIngProps = {
  meal: MealTypes;
};

function MealIng({ meal }: MealIngProps) {
  const {
    strIngredient1,
    strIngredient2,
    strIngredient4,
    strIngredient5,
    strIngredient3,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strMeasure1,
    strMeasure2,
    strMeasure4,
    strMeasure5,
    strMeasure3,
    strMeasure6,
    strMeasure7,
    strMeasure8,
  } = meal || {};

  const imageStyle = "mb-4 md:mx-2 md:max-w-32 ";
  const h3Style = "text-center dark:text-secondary font-semibold text-sm";
  return (
    <p>
      <h2 className="md:text-3xl mb-8 uppercase tracking-wider mt-20 dark:bg-tertiary_dark/70 bg-tertiary_light/70 p-3 text-secondary">
        Ingredients
      </h2>

      <div className=" mt-4 flex-wrap justify-center hidden md:flex gap-2 bg-tertiary_light/10 dark:bg-tertiary_dark/10 p-2">
        {strIngredient1 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient1}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient1}</h3>
            <h3 className={h3Style}>{strMeasure1}</h3>
          </div>
        )}
        {strIngredient2 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient2}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient2}</h3>
            <h3 className={h3Style}>{strMeasure2}</h3>
          </div>
        )}
        {strIngredient3 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient3}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient3}</h3>
            <h3 className={h3Style}>{strMeasure3}</h3>
          </div>
        )}
        {strIngredient4 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient4}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient4}</h3>
            <h3 className={h3Style}>{strMeasure4}</h3>
          </div>
        )}
        {strIngredient5 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient5}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient5}</h3>
            <h3 className={h3Style}>{strMeasure5}</h3>
          </div>
        )}
        {strIngredient6 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient6}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient6}</h3>
            <h3 className={h3Style}>{strMeasure6}</h3>
          </div>
        )}
        {strIngredient7 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient7}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient7}</h3>
            <h3 className={h3Style}>{strMeasure7}</h3>
          </div>
        )}
        {strIngredient8 && (
          <div>
            <img
              src={`https://www.themealdb.com/images/ingredients/${strIngredient8}.png`}
              alt=""
              className={imageStyle}
            />
            <h3 className={h3Style}>{strIngredient8}</h3>
            <h3 className={h3Style}>{strMeasure8}</h3>
          </div>
        )}
      </div>

      <div className="  md:hidden p-3">
        <SliderV
          slidesToShow400={2}
          slidesToScroll400={2}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {strIngredient1 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient1}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient1}</h3>
              <h3 className={h3Style}>{strMeasure1}</h3>
            </div>
          )}
          {strIngredient2 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient2}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient2}</h3>
              <h3 className={h3Style}>{strMeasure2}</h3>
            </div>
          )}
          {strIngredient3 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient3}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient3}</h3>
              <h3 className={h3Style}>{strMeasure3}</h3>
            </div>
          )}
          {strIngredient4 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient4}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient4}</h3>
              <h3 className={h3Style}>{strMeasure4}</h3>
            </div>
          )}
          {strIngredient5 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient5}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient5}</h3>
              <h3 className={h3Style}>{strMeasure5}</h3>
            </div>
          )}
          {strIngredient6 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient6}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient6}</h3>
              <h3 className={h3Style}>{strMeasure6}</h3>
            </div>
          )}
          {strIngredient7 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient7}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient7}</h3>
              <h3 className={h3Style}>{strMeasure7}</h3>
            </div>
          )}
          {strIngredient8 && (
            <div>
              <img
                src={`https://www.themealdb.com/images/ingredients/${strIngredient8}.png`}
                alt=""
                className={imageStyle}
              />
              <h3 className={h3Style}>{strIngredient8}</h3>
              <h3 className={h3Style}>{strMeasure8}</h3>
            </div>
          )}
        </SliderV>
      </div>
    </p>
  );
}

export default MealIng;
