import React, { useState } from "react";
import axios from "axios";
import { Console, error } from "console";

async function OpenWeatherApi(lat: string, lon: string) {
  const openWeatherApiForecast: string =
    "https://api.openweathermap.org/data/2.5/forecast?";
  const openWeatherApiWeather: string =
    "https://api.openweathermap.org/data/2.5/weather?";
  const openWeatherApiQuery: string = `lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  const openWeatherApiUrl: string =
    openWeatherApiWeather + openWeatherApiQuery;

  //const [response, setResponse] = useState("");
  
  return await axios.get(openWeatherApiUrl).then( (res) => {
    console.log("response");
    return res.data
  }).catch( (error) => {
    console.log("error");
    return error.code
  }).finally ( () => {
    console.log("finally");

  });
    

}

export default OpenWeatherApi;
