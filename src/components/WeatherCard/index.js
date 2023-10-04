import HourlyTemp from '../HourlyTemps';
import './index.css';

const getEmoji = (conditions) => {
    // Map weather conditions to emojis
    switch (conditions) {
        case 'sunny':
            return '☀️';
        case 'stormy':
            return '⛈️';
        case 'rainy':
            return '🌧️';
        case 'cloudy':
            return '☁️';
        default:
            return '❓';
    }
};

const WeatherCard = ({ day, conditions, maxTemp, wind, hourlyTemp }) => {

    const isHeatWarning = maxTemp >= 35
    const isWindWarning = wind >= 30
    return (
        <div className='weather-card'>
            <div className='day'>{day}</div>
            <div className='emoji'>{getEmoji(conditions)}</div>
            <div className='conditions'>{conditions}</div>
            <div className='temperature'>Max Temp: {maxTemp} °C</div>
            <div className='wind-speed'>Wind Speed: {wind} km/h</div>
            {isHeatWarning && <div className='warning-label'>Heatwave warning</div>}
            {isWindWarning && <div className='warning-label orange'>Strong wind warning</div>}
            {(!isHeatWarning && !isWindWarning) && <div className='empty-line'></div>}
            <HourlyTemp hourlyTemp={hourlyTemp} />
        </div>
    )
}

export default WeatherCard