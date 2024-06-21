import axios from "axios";
import Result from "../Result/Result";
import "./home.css";

import { useEffect, useState } from "react";

function Home() {
  const [search, setsearch] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [warning,setwarning] =useState(true)

  useEffect(() => {
    console.log(weatherData);
  });

  const handleweather = () => {
    setwarning(false);
    console.log(search);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=35669c7dfbbe389f8c298fb8f188adb0&units=metric`
      )
      .then((res) => {
        setWeatherData(res.data);
        console.log(res);
      })
      .catch((err) => {
        setWeatherData();

        console.error(err);
      });

    //    .then(data => console.log(data))?
  };
  return (
    <div className="home">
      <h1>Welcome to my website!</h1>
      <div className="first-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search city"
          onChange={(e) => setsearch(e.target.value)}
        />
        <button variant="primary" className="bttn-s" onClick={handleweather}>
          Search
        </button>
      </div>
      <div className="second-section">
        <div className="left-side container">
          <div></div>
          <h3>{weatherData?(<p>{weatherData.name}</p>):((warning?<div>Please enter s city name</div>:<div>No city found</div>))}</h3>
          {weatherData ? (
            <div className="temp-result">
              <p>Temperature: {weatherData.main.temp}C</p>
            </div>
          ) : (
            <div>
              
            </div>
          )}
        </div>
        <div>
          {weatherData ? <Result weather={weatherData} /> : <div></div>}
        </div>
      </div>
    </div>
  );
}
export default Home;
