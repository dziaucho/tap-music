import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchSounds, fetchSoundInfo } from "./async";

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
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSounds.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchSounds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.count = action.payload.count;
        state.soundsId = action.payload.soundsId;
        state.soundsNames = action.payload.soundsNames;
      })
      .addCase(fetchSounds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchSoundInfo.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchSoundInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.soundsPreviews = action.payload;
      })
      .addCase(fetchSoundInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSoundToSearch, setCurrentPage, clearError } =
  soundsSlice.actions;
export default soundsSlice.reducer;
