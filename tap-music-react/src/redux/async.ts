import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSounds, getSoundInfo } from "../api/api";

export const fetchSounds = createAsyncThunk(
  "sounds/fetchSounds",
  async ({ query, page }: { query: string; page: number }, thunkAPI) => {
    try {
      const [count, soundsId, soundsNames] = await getSounds(query, page);
      return { count, soundsId, soundsNames };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const fetchSoundInfo = createAsyncThunk(
  "sounds/fetchSoundInfo",
  async ({ soundsId }: { soundsId: number[] }, thunkAPI) => {
    try {
      const soundPreviews = await Promise.all(
        soundsId.map(async (soundId) => {
          return await getSoundInfo(soundId);
        }),
      );
      return soundPreviews;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);
