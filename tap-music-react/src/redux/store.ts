import { configureStore } from "@reduxjs/toolkit";
import { RootStateType } from "./types";
import soundsReducer from "./soundsSlice";

const store = configureStore({
  reducer: {
    sounds: soundsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = RootStateType;

export default store;
