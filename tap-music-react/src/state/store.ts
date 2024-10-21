import { configureStore } from "@reduxjs/toolkit";
import soundReducer from "../slices/soundSlice";

const store = configureStore({
  reducer: {
    sounds: soundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
