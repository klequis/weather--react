import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'

const CurrentConditions = () => {
  return (
    <div id='CurrentConditions'>
      <h2>Current Conditions</h2>
      <div className='container'>
        <div className='row'>
          <ul className='list-group'>

          </ul>
        </div>
        <div className='row'>
          <div className='col'>
            <ul className='list-group'>
              <li className='list-group-item'><img src={iCloudy} alt='cloudy' /></li>
              <li className='list-group-item'>6.4 C</li>
              <li className='list-group-item'>Feels like: 6 C</li>
              <li className='list-group-item'>Overcast</li>
              <li className='list-group-item'>Duepoint: 6 C</li>
            </ul>
          </div>
          <div className='col'>
            <ul className='list-group'>
              <li className='list-group-item spacer-item'></li>
              <li className='list-group-item'>Pressure: 1026 mp 0</li>
              <li className='list-group-item'>Relative humidity: 98%</li>
              <li className='list-group-item'>UV: 0</li>
              <li className='list-group-item'>Wind: West at 0 kph</li>
              <li className='list-group-item'>Gusts: 0 kph</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}
export default CurrentConditions
