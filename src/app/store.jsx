import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/userSlice";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: { data: rootReducer },
});
