
import './index.css'
import '../Weather'
import Weather from '../Weather'

// const forecastData = [
//   {
//     day: "Monday",
//     conditions: "sunny",
//     maxTemp: 38,
//     wind: 15,
//   },
//   {
//     day: "Tuesday",
//     conditions: "stormy",
//     maxTemp: 26,
//     wind: 36,
//   },
//   {
//     day: "Wednesday",
//     conditions: "rainy",
//     maxTemp: 25,
//     wind: 25,
//   },
//   {
//     day: "Thursday",
//     conditions: "cloudy",
//     maxTemp: 28,
//     wind: 20,
//   },
//   {
//     day: "Friday",
//     conditions: "sunny",
//     maxTemp: 35,
//     wind: 16,
//   },
// ];


// forecast data with hourly temps
const forecastData = [
  {
    day: "Monday",
    conditions: "sunny",
    maxTemp: 38,
    wind: 15,
    hourlyTemp: [24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27],
  },
  {
    day: "Tuesday",
    conditions: "stormy",
    maxTemp: 26,
    wind: 36,
    hourlyTemp: [18, 18, 18, 19, 20, 21, 22, 23, 24, 25, 24, 23, 22, 21, 20, 19, 18, 18, 17, 17, 17, 17, 17, 17],
  },
  {
    day: "Wednesday",
    conditions: "rainy",
    maxTemp: 25,
    wind: 25,
    hourlyTemp: [20, 20, 21, 21, 22, 22, 23, 24, 25, 24, 23, 23, 22, 21, 21, 20, 20, 19, 19, 18, 18, 18, 18, 18],
  },
  {
    day: "Thursday",
    conditions: "cloudy",
    maxTemp: 28,
    wind: 20,
    hourlyTemp: [23, 23, 23, 24, 24, 25, 26, 27, 27, 28, 28, 28, 28, 28, 27, 27, 26, 25, 24, 23, 23, 23, 23, 23],
  },
  {
    day: "Friday",
    conditions: "sunny",
    maxTemp: 35,
    wind: 16,
    hourlyTemp: [17, 17, 17, 17, 18, 19, 20, 22, 24, 27, 29, 32, 34, 35, 34, 33, 32, 30, 28, 26, 24, 21, 19, 18],
  },
];


const App = () => {
  return (
    <div className='centered-div'>
      <Weather forecastData={forecastData} />
    </div>
  )
}

export default App