import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export type FavoritesType = {
  idMeal?: string;
  idDrink?: string;
  strCategory?: string;
  strDrink?: string;
  strMeal?: string;
  strGlass?: string;
  strAlcoholic?: string;

  strMealThumb?: string;
  strDrinkThumb?: string;
};

type MainContextProps = {
  favorites: FavoritesType[];

  mainInput: string;
  showSearchBar: boolean;
  showResponsiveNav: boolean;
  showMealSidebar: boolean;
  showCocktailSidebar: boolean;

  mealInput: string;
  mealCategory: string;
  mealArea: string;
  mealIngredient: string;

  drinkInput: string;
  drinkCategory: string;
  drinkGlass: string;
  drinkAlcohol: string;
  drinkIngredient: string;
  dispatch: React.Dispatch<Action>; // Include dispatch in the type
};

type MainContextProviderProps = {
  children: ReactNode;
};

const MainContext = createContext<MainContextProps | null>(null);
const initialState: MainContextProps = {
  favorites: [],
  mainInput: "",
  showSearchBar: false,
  showResponsiveNav: false,
  showMealSidebar: false,
  showCocktailSidebar: false,

  mealInput: "",
  mealCategory: "",
  mealArea: "",
  mealIngredient: "",

  drinkInput: "",
  drinkCategory: "",
  drinkGlass: "",
  drinkAlcohol: "",
  drinkIngredient: "",
  dispatch: () => {},
};

type ACTION_GET_MEAL_CATEGORY = {
  type: "ACTION_GET_MEAL_CATEGORY";
  payload: string;
};

type ACTION_GET_MEAL_INPUT = {
  type: "ACTION_GET_MEAL_INPUT";
  payload: string;
};

type ACTION_GET_MEAL_AREA = {
  type: "ACTION_GET_MEAL_AREA";
  payload: string;
};

type ACTION_GET_MEAL_INGREDIENT = {
  type: "ACTION_GET_MEAL_INGREDIENT";
  payload: string;
};
//============================================================================

type ACTION_GET_COCKTAIL_INPUT = {
  type: "ACTION_GET_COCKTAIL_INPUT";
  payload: string;
};

type ACTION_GET_COCKTAIL_INGREDIENT = {
  type: "ACTION_GET_COCKTAIL_INGREDIENT";
  payload: string;
};

type ACTION_GET_COCKTAIL_MEAL = {
  type: "ACTION_GET_COCKTAIL_MEAL";
  payload: string;
};

type ACTION_GET_COCKTAIL_GLASS = {
  type: "ACTION_GET_COCKTAIL_GLASS";
  payload: string;
};

type ACTION_GET_COCKTAIL_ALCOHOL = {
  type: "ACTION_GET_COCKTAIL_ALCOHOL";
  payload: string;
};

type ACTION_GET_COCKTAIL_CATEGORY = {
  type: "ACTION_GET_COCKTAIL_CATEGORY";
  payload: string;
};
//================================================
type ACTION_GET_MAIN_INPUT = {
  type: "ACTION_GET_MAIN_INPUT";
  payload: string;
};

type ACTION_CLOSE_MODAL = {
  type: "ACTION_CLOSE_MODAL";
};

type ACTION_OPEN_RESPONSIVE_NAV = {
  type: "ACTION_OPEN_RESPONSIVE_NAV";
};

type ACTION_CLOSE_RESPONSIVE_NAV = {
  type: "ACTION_CLOSE_RESPONSIVE_NAV";
};

type ACTION_OPEN_MEAL_SIDEBAR = {
  type: "ACTION_OPEN_MEAL_SIDEBAR";
};
type ACTION_CLOSE_MEAL_SIDEBAR = {
  type: "ACTION_CLOSE_MEAL_SIDEBAR";
};

//================================================================
type ACTION_ADD_FAVORITE = {
  type: "ACTION_ADD_FAVORITE";
  payload: FavoritesType;
};
type ACTION_DELETE_FAVORITE = {
  type: "ACTION_DELETE_FAVORITE";
  payload: string;
};

type ACTION_OPEN_COCKTAIL_SIDEBAR = {
  type: "ACTION_OPEN_COCKTAIL_SIDEBAR";
};
type ACTION_CLOSE_COCKTAIL_SIDEBAR = {
  type: "ACTION_CLOSE_COCKTAIL_SIDEBAR";
};

type Action =
  | ACTION_GET_MEAL_AREA
  | ACTION_GET_MEAL_CATEGORY
  | ACTION_GET_MEAL_INGREDIENT
  | ACTION_GET_MEAL_INPUT
  | ACTION_GET_COCKTAIL_ALCOHOL
  | ACTION_GET_COCKTAIL_GLASS
  | ACTION_GET_COCKTAIL_MEAL
  | ACTION_GET_COCKTAIL_INGREDIENT
  | ACTION_GET_COCKTAIL_INPUT
  | ACTION_GET_COCKTAIL_CATEGORY
  | ACTION_GET_MAIN_INPUT
  | ACTION_CLOSE_MODAL
  | ACTION_OPEN_RESPONSIVE_NAV
  | ACTION_CLOSE_RESPONSIVE_NAV
  | ACTION_OPEN_MEAL_SIDEBAR
  | ACTION_CLOSE_MEAL_SIDEBAR
  | ACTION_OPEN_COCKTAIL_SIDEBAR
  | ACTION_CLOSE_COCKTAIL_SIDEBAR
  | ACTION_ADD_FAVORITE
  | ACTION_DELETE_FAVORITE;

function reducer(state: MainContextProps, action: Action) {
  if (action.type === "ACTION_GET_MAIN_INPUT") {
    return {
      ...state,
      mainInput: action.payload,
      showSearchBar: true,
      mealCategory: "",
      mealIngredient: "",
      mealGlass: "",
      mealAlcohol: "",
    };
  }

  if (action.type === "ACTION_CLOSE_MODAL") {
    return {
      ...state,
      showSearchBar: false,
      mainInput: "",
    };
  }

  if (action.type === "ACTION_OPEN_RESPONSIVE_NAV") {
    return {
      ...state,
      showResponsiveNav: true,
    };
  }

  if (action.type === "ACTION_CLOSE_RESPONSIVE_NAV") {
    return {
      ...state,
      showResponsiveNav: false,
    };
  }

  if (action.type === "ACTION_OPEN_MEAL_SIDEBAR") {
    return {
      ...state,
      showMealSidebar: true,
    };
  }

  if (action.type === "ACTION_CLOSE_MEAL_SIDEBAR") {
    return {
      ...state,
      showMealSidebar: false,
    };
  }

  if (action.type === "ACTION_OPEN_COCKTAIL_SIDEBAR") {
    return {
      ...state,
      showCocktailSidebar: true,
    };
  }

  if (action.type === "ACTION_CLOSE_COCKTAIL_SIDEBAR") {
    return {
      ...state,
      showCocktailSidebar: false,
    };
  }

  //================================================================================================
  if (action.type === "ACTION_DELETE_FAVORITE") {
    return {
      ...state,
      favorites: state.favorites.filter(
        (fav) => fav.idDrink !== action.payload && fav.idMeal !== action.payload
      ),
    };
  }
  if (action.type === "ACTION_ADD_FAVORITE") {
    return {
      ...state,
      favorites: [...state.favorites, action.payload],
    };
  }
  //================================================================================================

  if (action.type === "ACTION_GET_MEAL_INPUT") {
    return {
      ...state,
      mealInput: action.payload,
      mealCategory: "",
      mealIngredient: "",
      mealArea: "",

      showMealSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_MEAL_CATEGORY") {
    return {
      ...state,
      mealCategory: action.payload,
      mealInput: "",
      mealIngredient: "",
      mealArea: "",

      showMealSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_MEAL_AREA") {
    return {
      ...state,
      mealArea: action.payload,
      mealInput: "",
      mealIngredient: "",
      mealCategory: "",

      showMealSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_MEAL_INGREDIENT") {
    return {
      ...state,
      mealIngredient: action.payload,
      mealInput: "",
      mealArea: "",
      mealCategory: "",

      showMealSidebar: false,
    };
  }

  //================================================================
  if (action.type === "ACTION_GET_COCKTAIL_INPUT") {
    return {
      ...state,
      drinkInput: action.payload,

      drinkCategory: "",
      drinkIngredient: "",
      drinkGlass: "",
      drinkAlcohol: "",

      showCocktailSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_COCKTAIL_CATEGORY") {
    return {
      ...state,
      drinkCategory: action.payload,
      drinkInput: "",
      drinkIngredient: "",
      drinkGlass: "",
      drinkAlcohol: "",

      showCocktailSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_COCKTAIL_GLASS") {
    return {
      ...state,
      drinkGlass: action.payload,
      drinkInput: "",
      drinkIngredient: "",
      drinkCategory: "",
      drinkAlcohol: "",

      showCocktailSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_COCKTAIL_INGREDIENT") {
    return {
      ...state,
      drinkIngredient: action.payload,

      drinkInput: "",
      drinkGlass: "",
      drinkCategory: "",
      drinkAlcohol: "",

      showCocktailSidebar: false,
    };
  }

  if (action.type === "ACTION_GET_COCKTAIL_ALCOHOL") {
    return {
      ...state,
      drinkAlcohol: action.payload,

      drinkIngredient: "",
      drinkInput: "",
      drinkGlass: "",
      drinkCategory: "",

      showCocktailSidebar: false,
    };
  }

  return state;
}

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [
    {
      favorites,
      mainInput,
      showSearchBar,
      showResponsiveNav,
      showMealSidebar,
      showCocktailSidebar,
      mealInput,
      mealCategory,
      mealArea,
      mealIngredient,
      drinkInput,
      drinkCategory,
      drinkGlass,
      drinkAlcohol,
      drinkIngredient,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider
      value={{
        favorites,
        mainInput,
        showSearchBar,
        showResponsiveNav,
        showMealSidebar,
        showCocktailSidebar,

        mealInput,
        mealCategory,
        mealArea,
        mealIngredient,
        drinkInput,
        drinkCategory,
        drinkGlass,
        drinkAlcohol,
        drinkIngredient,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  const context = useContext(MainContext);

  if (context === null) {
    throw new Error("Something went wrong");
  }

  return context;
}
