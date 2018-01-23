import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'
import Day from './Day'

const Forecast = () => {
  return (
    <div>
      <h2>Forecast</h2>
      <Day
        date='Jan 23'
        img={iCloudy}
        hi='14'
        low='4'
        conditions='Partly Cloudy'
        wind='6 kph'
      />
      <Day
        date='Jan 24'
        img={iCloudy}
        hi='14'
        low='4'
        conditions='Partly Cloudy'
        wind='6 kph'
      />
    </div>
  )
}
export default Forecast
