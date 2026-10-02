import { ReactNode } from "react";
import { GiMeal } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import Button from "../ui/reusable/Button";

type Feature = {
  icon: ReactNode;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: <GiMeal />,
    title: "Meals",
    text: "Browse hundreds of recipes from around the world. Filter by category, area or ingredient and find your next favourite dish.",
  },
  {
    icon: <BiDrink />,
    title: "Cocktails",
    text: "Discover drinks by category, glass, ingredient or alcohol content, with step-by-step instructions for each one.",
  },
  {
    icon: <FaRegHeart />,
    title: "Favorites",
    text: "Save the recipes and drinks you love so you can come back to them anytime.",
  },
  {
    icon: <IoCartOutline />,
    title: "Cart",
    text: "Collect what you want to cook or mix and keep everything you need in one place.",
  },
];

function About() {
  return (
    <div className="md:mx-72 mx-4 mt-16 mb-20">
      <section className="relative">
        <div
          style={{ backgroundImage: `url("/homeImage.jpg")` }}
          className="md:h-80 h-60 w-full bg-cover bg-center relative rounded-md"
        >
          <div className="absolute h-full w-full rounded-md bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 md:left-10 left-5 flex flex-col gap-3">
          <h1 className="text-secondary text-3xl md:text-5xl tracking-widest uppercase">
            About Us
          </h1>
          <p className="text-secondary/80 md:text-lg max-w-md">
            Food and drinks, all in one place.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-10 mt-16 items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="md:w-64 w-40 dark:mix-blend-color-burn mix-blend-darken"
        />
        <div>
          <h2 className="md:text-3xl text-2xl uppercase tracking-wider mb-4 dark:text-secondary">
            Who we are
          </h2>
          <p className="dark:text-secondary leading-relaxed mb-3">
            We started with a simple idea: deciding what to eat or drink
            should be fun, not a chore. We bring together recipes and cocktails
            from every corner of the world so you can explore, get inspired and
            cook something new tonight.
          </p>
          <p className="dark:text-secondary leading-relaxed">
            Whether you are a home cook looking for a quick dinner or planning
            drinks for a party, you will find clear ingredients, measures and
            instructions for every recipe.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="md:text-3xl uppercase tracking-wider bg-tertiary_light/70 dark:bg-tertiary_dark/70 p-3 text-secondary">
          What you can do
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 mt-6">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex gap-4 p-5 border border-stone-300 rounded-md"
            >
              <span className="text-3xl text-tertiary_light dark:text-secondary">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-xl uppercase font-semibold tracking-wider mb-1 dark:text-secondary">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 flex flex-col items-center text-center gap-6 bg-tertiary_light/70 dark:bg-tertiary_dark/70 rounded-md p-10">
        <h2 className="md:text-3xl text-2xl uppercase tracking-wider text-secondary">
          Ready to get started?
        </h2>
        <p className="text-secondary/80 max-w-lg">
          Pick a recipe or a drink and make something delicious today.
        </p>
        <div className="flex gap-4">
          <Button to="/meals" btn="secondary">
            Explore Meals
          </Button>
          <Button to="/cocktails" btn="secondary">
            Explore Drinks
          </Button>
        </div>
        <p className="text-xs text-secondary/60">
          Data provided by{" "}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            TheMealDB
          </a>{" "}
          and{" "}
          <a
            href="https://www.thecocktaildb.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            TheCocktailDB
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default About;
