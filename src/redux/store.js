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
import { favoriteReducer } from "./favorite/favoriteSlice";

const catalogPersistConfig = {
  key: "catalog",
  storage,
  whitelist: ["favorites"],
};

const filterPersistConfig = {
  key: "filter",
  storage,
  blacklist: ["filter"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(catalogPersistConfig, catalogReducer),
    filter: persistReducer(filterPersistConfig, filterReducer),
    favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
