import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"GreaterNoida",
        feelsLike: 39.22,
        humidity:13,
        temp:41.47,
        tempMax:41.47,
        tempMin:41.47,
        weather:"clear sky" 
    });

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}