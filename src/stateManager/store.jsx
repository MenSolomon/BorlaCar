import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import OtherComponentStatesReducer from "./slices/OtherComponentStatesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["OtherComponentStates"],
};

const reducer = combineReducers({
  OtherComponentStates: OtherComponentStatesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
