import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import FreesoundAPI from "../api/freeSoundApi";
import { API_KEY, BASE_URL } from "../api/api";
import { Composition, SoundState } from "../types/types";

const initialState: SoundState = {
  sounds: [],
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
};

const freesoundAPI = new FreesoundAPI(API_KEY, BASE_URL);

export const fetchSounds = createAsyncThunk<
  { sounds: Composition[]; count: number },
  string,
  { state: { sounds: SoundState } }
>("sounds/fetchSounds", async (query: string, { getState }) => {
  const state = getState();
  const response = await freesoundAPI.fetch(query, state.sounds.currentPage);
  return { sounds: response.sounds, count: response.count };
});

const soundSlice = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSounds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSounds.fulfilled,
        (
          state,
          action: PayloadAction<{ sounds: Composition[]; count: number }>,
        ) => {
          state.loading = false;
          state.sounds = action.payload.sounds;
          state.totalPages = Math.ceil(action.payload.count / 5);
        },
      )
      .addCase(fetchSounds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setPage, clearError } = soundSlice.actions;

export default soundSlice.reducer;
