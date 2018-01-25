import React from 'react'
import './style.css'
import { conditions, temp_f, relative_humidity, wind_mph, pressure_in, feelslike_f, icon_url } from '../../data/san-francisco'

const CurrentConditions = () => {
  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul className='list-group'>
              <li className='list-group-item'><img src={icon_url} alt='cloudy' /></li>
              <li className='list-group-item'>{conditions}</li>
              <li className='list-group-item'>Temperature; {temp_f} F</li>
              <li className='list-group-item'>Feels like: {feelslike_f} F</li>
              <li className='list-group-item'>Wind: {wind_mph} mph</li>
              <li className='list-group-item'>Relative humidity: {relative_humidity}</li>
              <li className='list-group-item'>Pressure: {pressure_in} in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrentConditions
