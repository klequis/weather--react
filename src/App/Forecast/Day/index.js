import React from 'react'
import './style.css'

const Day = ({ date, img, hi, low, conditions, humidity, wind }) => {
  return (
    <div id='Day'>
      <div>{date}</div>
      {img}
      <div>{hi} / {low}</div>
      <div>{conditions}</div>
      <div>Humidity: {humidity}</div>
      <div>Wind: {wind}</div>
    </div>
  )
}
export default Day
