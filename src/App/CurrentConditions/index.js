import React from 'react'
import './style.css'

import { conditions, temp_f, temp_c, relative_humidity, wind_mph, wind_gust_mph, wind_kph, wind_gust_kph, pressure_mb, pressure_in, pressure_trend, feelslike_f, feelslike_c, icon_url } from '../../data/san-francisco'

const CurrentConditions = () => {
  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <ul>
        <li><img src={icon_url} alt='cloudy' /></li>
        <li>{conditions}</li>
        <li>Temperature: {temp_f} F</li>
        <li>Feels like: {feelslike_f} F</li>
        <li>Wind: West at 0 kph</li>
        <li>Relative humidity: {relative_humidity}%</li>
        <li>Pressure: {pressure_in} in</li>
      </ul>
    </div>
  )
}
export default CurrentConditions
