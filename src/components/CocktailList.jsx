import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailList = ({
  isLoading,
  cocktails,
  handleFavoriteToggle,
  favorites,
}) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4">Cocktails</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : cocktails.length === 0 ? (
        <p>Start Searching...</p>
      ) : (
        <div>
          {cocktails.map((cocktail) => (
            <CocktailItem
              cocktail={cocktail}
              handleFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CocktailList;
