import styles from "./Dashboard.module.scss"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import WeatherData from "../../components/WeatherData/WeatherData"

function Dashboard() {
    const [weatherData, setWeatherData] = useState(null)
    const locationInput = useRef("")

    function fetchLocationData() {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput.current}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                fetchWeatherData(res.data[0].lat, res.data[0].lon)
            })
    }

    function fetchWeatherData(lat, lon) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setWeatherData(res.data)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchLocationData()
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type={"text"} onChange={e => locationInput.current = e.currentTarget.value} />
                <button>Search</button>
            </form>
            <h1>My Dashboard</h1>
            {weatherData &&
                <WeatherData {...weatherData} />
            }
            <div></div>
        </div>
    )
}

export default Dashboard