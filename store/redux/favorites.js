import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.ids = [...state.ids, action.payload.id]; // Ensure no duplicates
      console.log("Added to favorites:", action.payload.id, "||", state.ids); // Debugging line
    },
    removeFavorites: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);

      console.log("Added to favorites:", action.payload.id, "||", state.ids); // Debugging line
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

