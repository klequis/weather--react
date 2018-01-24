import React from 'react'
import './style.css'

const Day = ({ date, icon_url, hi, low, conditions, humidity, wind }) => {
  return (
    <div id='Day'>
      <div>{date}</div>
      <div><img src={icon_url} alt='conditions' /></div>
      <div>{hi} / {low}</div>
      <div>{conditions}</div>
      <div>Humidity: {humidity}</div>
      <div>Wind: {wind}</div>
    </div>
  )
}
export default Day
