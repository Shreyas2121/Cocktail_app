import { useNavigate } from "react-router-dom";

const CocktailItem = ({ cocktail, handleFavoriteToggle, favorites }) => {
  const navigate = useNavigate();

  return (
    <div key={cocktail.idDrink} className="flex items-center mb-4">
      <div
        className="
          border-2 border-gray-300 rounded-lg
          flex items-center p-2
          cursor-pointer
        "
        onClick={() =>
          navigate(`/cocktail/${cocktail.idDrink}`, { state: { cocktail } })
        }
      >
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="w-20 h-20 mr-4"
        />
        <h3 className="text-lg font-bold">{cocktail.strDrink}</h3>
      </div>
      <button
        onClick={() => handleFavoriteToggle(cocktail)}
        className="ml-4 px-4 py-2 text-white bg-blue-500 rounded"
      >
        {favorites.some((fav) => fav.idDrink === cocktail.idDrink)
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CocktailItem;
