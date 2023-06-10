import React from "react";
import FavouriteItem from "./FavouriteItem";

const FavoritesList = ({ favorites, setFavorites }) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4">Favorite Cocktails</h2>
      {favorites.length === 0 ? (
        <p>No favorite cocktails saved.</p>
      ) : (
        <div>
          {favorites.map((cocktail) => (
            <FavouriteItem cocktail={cocktail} />
          ))}
          <button
            onClick={() => setFavorites([])}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Clear Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
