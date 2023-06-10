import { Routes, Route } from "react-router-dom";
import CocktailSearchPage from "./pages/CocktailSearchPage";
import CocktailPage from "./pages/CocktailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CocktailSearchPage />} />
      <Route path="/cocktail/:id" element={<CocktailPage />} />
    </Routes>
  );
};

export default App;
