import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
  key: "favorites",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    cars: catalogReducer,
    favorites: persistReducer(persistConfig, filterReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
