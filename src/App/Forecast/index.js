import React from 'react'
import './style.css'
import iCloudy from './cloudy.gif'
import Day from './Day'
import { days } from '../../data/san-francisco'

const Forecast = () => {
  // for (let i=0; i<=3; i++) {
  //   console.log(days(i, 'date'))
  // }
  const renderDays = () => {
    let arr = []
    for (let i=0; i<=3; i++) {
      let icon_url = days(i, 'icon_url')
      let img = <img src={days(i, 'icon_url')} />
      let day = <Day
        date={days(i, 'date')}
        img={<img src={icon_url} />}
        hi={days(i, 'high_f')}
        low={days(i, 'low_f')}
        conditions={days(i, 'conditions')}
        humidity={days(i, 'humidity')}
        wind={days(i, 'wind_mph')}
      />

      arr.push(day)
    }
    return arr
  }
  console.log(renderDays())

  return (
    <div>
      <h2>Forecast</h2>
      <h3>render</h3>
      {renderDays()}
      <h3>render</h3>
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
