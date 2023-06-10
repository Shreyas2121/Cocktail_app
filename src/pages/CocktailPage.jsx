import React from "react";
import { useLocation } from "react-router-dom";

const CocktailPage = () => {
  const location = useLocation();
  const cocktail = location.state.cocktail;

  return (
    <div className="p-7">
      <h2 className="text-2xl font-bold mb-4">{cocktail.strDrink}</h2>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-64 h-64 mb-4"
      />
      <div>
        <h3 className="text-xl font-bold mb-2">Instructions:</h3>
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default CocktailPage;
