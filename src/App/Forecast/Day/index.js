import React from 'react'
import './style.css'

const Day = ({ date, img, hi, low, conditions, humidity, wind }) => {
  return (
    <div id='Day'>
      <div>{date}</div>
      <img src={img} alt='cloudy' />
      <div>{hi} / {low}</div>
      <div>{conditions}</div>
      <div>{humidity}</div>
      <div>{wind} kph</div>
    </div>
  )
}
export default Day
