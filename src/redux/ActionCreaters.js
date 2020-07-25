import * as ActionTypes from "./ActionTypes";
import { baseUrl, apiKey } from "../Shared/UrlContents.js";
import { Weather } from "./resState";

export const weatherLoading = () => ({
  type: ActionTypes.weatherLoading,
});

export const weatherFailed = (errmess) => ({
  type: ActionTypes.weatherFailed,
  payload: errmess,
});
export const updateWeather = (weather) => ({
  type: ActionTypes.updateWeather,
  payload: weather,
});
export const fetchWeather = (cityName) => (dispatch) => {
  dispatch(weatherLoading());
  return fetch(baseUrl + `?q=${cityName}&appid=${apiKey}`)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((weather) => dispatch(updateWeather(getPayload(weather))))

    .catch((error) => dispatch(weatherFailed(error.message)));
};

const getPayload = (weather) => {
  return {
    placename: weather.name,
    weatherMain: weather.weather[0].main,
    weatherDescription: weather.weather[0].description,
    icon: weather.weather[0].icon,
    temperature: weather.main.temp,
    country: weather.sys.country,
  };
};
