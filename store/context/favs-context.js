import { createContext, useState } from "react";
// import favoriteSlices.reducer from "../redux/favorites";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [FavoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorites = (id) => {
    console.log("addFavorites called for ID:", id); // Add this line
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorites = (id) => {
    console.log("removeFavorites called for ID:", id); // Add this line
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  };
  const values = {
    ids: FavoriteMealIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
