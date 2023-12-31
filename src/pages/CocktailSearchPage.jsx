import { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import FavoritesList from "../components/FavoritesList";

const CocktailSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`
        );
        const data = await response.json();
        setCocktails(data.drinks || []);
        setIsLoading(false);
      } catch (error) {
        console.log("error");
        setIsLoading(false);
      }
    };

    fetchCocktails();
  }, [searchTerm]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (cocktail) => {
    const isFavorite = favorites.some(
      (fav) => fav.idDrink === cocktail.idDrink
    );
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.idDrink !== cocktail.idDrink));
    } else {
      setFavorites([...favorites, cocktail]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cocktail Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          if (e.target.value.length === 0) {
            setCocktails([]);
          }
          setSearchTerm(e.target.value);
        }}
        placeholder="Search by first letter"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:mr-4 mb-4 md:mb-0">
          <CocktailList
            handleFavoriteToggle={handleFavoriteToggle}
            favorites={favorites}
            isLoading={isLoading}
            cocktails={cocktails}
          />
        </div>

        <div className="md:w-1/3">
          <FavoritesList favorites={favorites} setFavorites={setFavorites} />
        </div>
      </div>
    </div>
  );
};

export default CocktailSearchPage;
