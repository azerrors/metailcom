import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SkeletonTheme } from "react-loading-skeleton";

import About from "./pages/About";
import Cart from "./pages/Cart";
import Cocktails from "./pages/Cocktails";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Meals from "./pages/Meals";

import Applayout from "./ui/Applayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import MainContextProvider from "./context/main-context";
import FilteredMealCategory from "./features/Meals/FilteredMealCategory";
import FilteredMealIngredient from "./features/Meals/FilteredMealIngredient";
import FilteredMealArea from "./features/Meals/FilteredMealArea";
import FilteredMealSearch from "./features/Meals/FilteredMealSearch";
import FilteredDrinkCategory from "./features/Cocktails/FilteredDrinkCategory";
import FilteredDrinkGlass from "./features/Cocktails/FilteredDrinkGlass";
import FilteredDrinkAlcohol from "./features/Cocktails/FilteredDrinkAlcohol";
import FilteredDrinkIngredient from "./features/Cocktails/FilteredDrinkIngredient";
import FilteredDrinkSearch from "./features/Cocktails/FilteredDrinkSearch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <SkeletonTheme baseColor="#EFEFEF" highlightColor="#999">
          <BrowserRouter>
            <Routes>
              <Route element={<Applayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="meals" element={<Meals />}>
                  <Route index element={<Navigate replace to="search" />} />

                  <Route path="search" element={<FilteredMealSearch />} />
                  <Route path="category" element={<FilteredMealCategory />} />
                  <Route
                    path="ingredient"
                    element={<FilteredMealIngredient />}
                  />
                  <Route path="area" element={<FilteredMealArea />} />
                </Route>
                <Route path="cocktails" element={<Cocktails />}>
                  <Route index element={<Navigate replace to="search" />} />

                  <Route path="search" element={<FilteredDrinkSearch />} />
                  <Route path="category" element={<FilteredDrinkCategory />} />
                  <Route path="glass" element={<FilteredDrinkGlass />} />
                  <Route path="alcohol" element={<FilteredDrinkAlcohol />} />
                  <Route
                    path="ingredient"
                    element={<FilteredDrinkIngredient />}
                  />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="cart" element={<Cart />} />

                <Route path="/:id" element={<Details />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SkeletonTheme>
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default App;
