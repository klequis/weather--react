import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'

const CurrentConditions = ({ currentConditions }) => {
  if (currentConditions === null) {
    console.log('return null')
    return null
  }
  console.log('currentConditions', currentConditions === null)

  const { current_observation } = currentConditions;
  const { weather, temp_c, dewpoint_c, feelslike_c, pressure_mp,
    relative_humidity, uv, wind_dir, wind_kph,
    wind_gust_kph, windchill_c } = current_observation;

  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <img src={iCloudy} alt='cloudy' />
      <ul>
        <li>Weather: {weather}</li>
        <li>Temperature: {temp_c}</li>
        <li>Dewpoint: {dewpoint_c}</li>
        <li>Feels like: {feelslike_c}</li>
        <li>Pressure: {pressure_mp}</li>
        <li>Relative humidity: {relative_humidity}</li>
        <li>UV: {uv}</li>
        <li>Wind: {wind_dir} at {wind_kph} kph</li>
        <li>Gusts: {wind_gust_kph} kph</li>
        <li>Windchill: {windchill_c} C</li>
      </ul>
    </div>
  )
}
export default CurrentConditions
