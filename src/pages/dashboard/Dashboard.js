import "./Dashboard.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

function Dashboard() {
    const [weatherData, setWeatherData] = useState(null)
    const locationInput = useRef("")

    function fetchLocationData() {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput.current}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setWeatherData(res.data[0])
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchLocationData()
    }

    console.log(weatherData)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} onChange={e => locationInput.current = e.currentTarget.value} />
                <button>Search</button>
            </form>
            <h1>My Dashboard</h1>
            {weatherData &&
                <h1>{weatherData.name}</h1>
            }
            <div></div>
        </div>
    )
}

export default Dashboard