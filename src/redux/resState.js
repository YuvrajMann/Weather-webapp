import * as ActionTypes from "./ActionTypes";

export const Weather = (
  state = {
    isLoading: false,
    errmess: null,
    weather: {
      placeName: null,
      weatherMain: null,
      weatherDescription: null,
      icon: null,
      temperature: null,
      country: null,
    },
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.updateWeather:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        weather: action.payload,
      };
    case ActionTypes.weatherFailed:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
      };
    case ActionTypes.weatherLoading:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };
    default:
      return state;
  }
};
