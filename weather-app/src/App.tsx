import React, { useState } from 'react';
import './App.css';
import OpenWeatherApi from './service/open-weather-api';

function App() {
  let flag = false;
  const [response, setResponse] = useState();
  let res;
  const HandleOpenWeather = async () => {
    res = await OpenWeatherApi("35.689", "139.692");
    console.log("Handle");
    console.log(res)

  };
  
  return (
    <>
    <h2 className='text-center text-2xl'>天気予報</h2>
    <button onClick={HandleOpenWeather}>天気を取得する</button>
    { res } 
    { response }
    </>
  );
}

export default App;
