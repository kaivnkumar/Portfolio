import { configureStore, combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./Slice/getPersonalDetail";

const rootReducer = combineReducers({
  personalInfo: infoReducer
  
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
