import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "../reducers";
import appHistory from "../history";
import { routerMiddleware } from "connected-react-router";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const persistedFilter = createFilter("auth", ["access", "refresh"]);

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "polls",
      storage: storage,
      whitelist: ["auth"],
      transforms: [persistedFilter],
    },
    rootReducer
  ),
  middleware: [thunk, routerMiddleware(appHistory)],
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
