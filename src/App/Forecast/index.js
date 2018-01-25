import React from 'react'
import './style.css'
import Day from './Day'
import { forecastDays as sfdata } from '../../data/san-francisco'

const Forecast = () => {
  const renderDays = sfdata('imperial').map((d, index) => {
    return <div className='col' key={index}>
      <Day
        date={d.date}
        icon_url={d.icon_url}
        hi={d.hi}
        low={d.low}
        conditions={d.conditions}
        humidity={d.humidity}
        wind={d.wind}
      />
    </div>
  })

  return (
    <div className='section'>
      <h2>Forecast</h2>
      <div className='row'>
        {renderDays}
      </div>
    </div>
  )
}
export default Forecast
