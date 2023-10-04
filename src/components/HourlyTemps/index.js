import './index.css'

const HourlyTemp = ({ hourlyTemp }) => {

    return (
        <table className="hourly-forecast">
            <tbody>
                {hourlyTemp.map((temp, i) => (
                    <tr key={i}>
                        <td className={`hourly-cell ${temp >= 30 ? "high-temp" : "low-temp"}`}>
                            {i}:00
                        </td>
                        <td className={`hourly-cell ${temp >= 30 ? "high-temp" : "low-temp"}`}>
                            {temp}°C
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default HourlyTemp