import WeatherCard from '../WeatherCard'
import './index.css'
const Weather = ({ forecastData }) => {

    return (
        <div className="weather-container">
            <h1 id="header">Weather App</h1>
            <div className='weather-app'>
                {forecastData.map(({ day, conditions, maxTemp, wind, hourlyTemp }, id) => {
                    return <WeatherCard key={id} day={day} conditions={conditions} maxTemp={maxTemp} wind={wind} hourlyTemp={hourlyTemp} />
                })}
            </div>
        </div>

    )
}
export default Weather;
