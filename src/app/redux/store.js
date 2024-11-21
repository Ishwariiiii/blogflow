import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/authSlice"
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from "redux-persist";
import travelReducer from "../redux/slice/blog/travelSlice"

const rootReducer = combineReducers({
   auth: authReducer,
   travel: travelReducer
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      })
}

)

export const persistor = persistStore(store);
export default store;