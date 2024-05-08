import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import LoginStatusReducer from "./slices/LoginStatusSlice";
import RequestDriverReducer from "./slices/RequestDriverSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["OtherComponentStates"],
};

const reducer = combineReducers({
  // OtherComponentStates: OtherComponentStatesReducer,
  LoginInfo: LoginStatusReducer,
  RequestedDriverData: RequestDriverReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
