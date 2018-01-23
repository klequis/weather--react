import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'

const CurrentConditions = () => {
  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <img src={iCloudy} alt='cloudy' />
      <ul>
        <li>Overcast</li>
        <li>6.4 C</li>
        <li>Duepoint: 6 C</li>
        <li>Feels like: 6 C</li>
        <li>Pressure: 1026 mp 0</li>
        <li>Relative humidity: 98%</li>
        <li>UV: 0</li>
        <li>Wind: West at 0 kph</li>
        <li>Gusts: 0 kph</li>
        <li>Windchill: 6 C</li>
      </ul>
    </div>
  )
}
export default CurrentConditions
