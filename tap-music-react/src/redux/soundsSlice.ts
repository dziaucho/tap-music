import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const soundsSlice = createSlice({
  name: "soundsInterface",
  initialState,
  reducers: {
    setSoundToSearch(state, action) {
      state.soundToSearch = action.payload;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const { setSoundToSearch, setCurrentPage, clearError } =
  soundsSlice.actions;
export default soundsSlice.reducer;
