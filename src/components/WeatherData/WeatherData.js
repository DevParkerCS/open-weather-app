import { DateUtils } from "../../Utils/DateUtils";

export default function WeatherData({ name, main: { temp, feels_like }, wind, dt, weather, timezone }) {
    return (
        <div>
            <div>{name}</div>
            <div>Temp: {Math.floor(temp)}&#8457;</div>
            <div>Feels Like:{Math.floor(feels_like)}&#8457;</div>
            <div>Wind: {Math.round(wind.speed)} mph</div>
            <div>{weather[0].description}</div>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
            {/* <div>{DateUtils.getTimeFromUnix(dt)}</div>
            <div>{DateUtils.getLocalCityTime(timezone)}</div> */}
        </div>
    )
} 