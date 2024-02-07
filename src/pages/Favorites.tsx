import { FavoritesType, useMainContext } from "../context/main-context";
import { TbMoodHappy } from "react-icons/tb";
import FavoriteItem from "../features/Favorite/FavoriteItem";

function Favorites() {
  const { favorites } = useMainContext();
  return (
    <div className="md:mx-72 mt-10">
      <h3 className="md:text-3xl tracking-wider font-medium text-stone-900 border-b-2 p-2 border-tertiary rounded-md">
        Your Favorites
      </h3>
      {favorites.length === 0 && (
        <div className="flex justify-center items-center mt-20">
          <TbMoodHappy className="text-tertiary text-5xl" />
        </div>
      )}
      <div className="flex flex-col">
        {favorites?.map((fav: FavoritesType) => {
          return <FavoriteItem key={fav.strCategory} item={fav} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
