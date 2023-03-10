import { configureStore, combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./Slice/getPersonalDetail";
import pictureReducers from "./Slice/getImage";
import SchoolInfoReducer from "./Slice/getSchoolInfo";
import MarksheetReducers from "./Slice/getMarkSheet";
import contactReducers from "./Slice/getContactInfo";
import suggestionReducer from "./Slice/postSuggestions";
import CollegeInfoReducer from "./Slice/getCollegeInfo";
import SkillReducers from "./Slice/getSkills";
import ProjectsReducers from "./Slice/getProjects";
import CertificateReducer from "./Slice/getCertificate";
import validationReducer from "./Slice/validation";

const rootReducer = combineReducers({
  personalInfo: infoReducer,
  image: pictureReducers,
  SchoolInfo: SchoolInfoReducer,
  MarksheetImage: MarksheetReducers,
  contactInfo: contactReducers,
  suggestionsData: suggestionReducer,
  CollegeInfo: CollegeInfoReducer,
  TechnicalSkill: SkillReducers,
  ProjectInfo: ProjectsReducers,
  CertificateInfo: CertificateReducer,
  ValidateInfo: validationReducer,
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
