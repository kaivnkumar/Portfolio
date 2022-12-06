import { configureStore, combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./Slice/getPersonalDetail";
import pictureReducers from "./Slice/getImage";
import gradeReducers from "./Slice/getGredeAndCer";
import certificateReducers from "./Slice/getCertificate";

const rootReducer = combineReducers({
  personalInfo: infoReducer,
  image: pictureReducers,
  Score: gradeReducers,
  certificateImage: certificateReducers
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
