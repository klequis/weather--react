import React from 'react'
import './style.css'
// import iCloudy from './cloudy.gif'
import Day from './Day'

const Forecast = ({ forecastData }) => {
  if (forecastData === null) {
    console.log('return null')
    return null
  }

  const { days } = forecastData;
  const forecastDays = days.map((day, index) =>
    <div>
      <h2>Forecast</h2>
      <Day
        key={index}
        date={day.date.pretty}
        img={day.icon_url}
        hi={day.high.fahrenheit}
        low={day.low.fahrenheit}
        conditions={day.conditions}
        wind={day.avewind.kph}
      />
    </div>
  );

  return forecastDays;
}
export default Forecast
