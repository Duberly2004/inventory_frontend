import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


