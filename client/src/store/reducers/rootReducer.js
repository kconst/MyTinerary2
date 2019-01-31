import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import activitiesReducer from "./activitiesReducer";
import userReducer from "./userReducer";

//combines all the individual reducers and their states
export default combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  activities: activitiesReducer,
  user: userReducer
});
