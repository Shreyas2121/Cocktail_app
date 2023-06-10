import React from "react";

import { useNavigate } from "react-router-dom";

const FavouriteItem = ({ cocktail }) => {
  const navigate = useNavigate();

  return (
    <div
      key={cocktail.idDrink}
      className="flex items-center mb-2 cursor-pointer"
      onClick={() =>
        navigate(`/cocktail/${cocktail.idDrink}`, { state: { cocktail } })
      }
    >
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-10 h-10 mr-2"
        loading="lazy"
      />
      <span>{cocktail.strDrink}</span>
    </div>
  );
};

export default FavouriteItem;
