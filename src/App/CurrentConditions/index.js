import React from 'react'
import './style.css'

import { conditions, temp_f, temp_c, relative_humidity, wind_mph, wind_gust_mph, wind_kph, wind_gust_kph, pressure_mb, pressure_in, pressure_trend, feelslike_f, feelslike_c, icon_url } from '../../data/san-francisco'

const CurrentConditions = () => {
  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <img src={icon_url} alt='cloudy' />
      <ul>
        <li>{conditions}</li>
        <li>{temp_f} F</li>
        <li>Feels like: {feelslike_f} F</li>
        <li>Pressure: {pressure_in} in</li>
        <li>Relative humidity: {relative_humidity}%</li>
        <li>Wind: West at 0 kph</li>
        <li>Gusts: {wind_gust_mph} kph</li>
      </ul>
    </div>
  )
}
export default CurrentConditions
