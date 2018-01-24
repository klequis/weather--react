import React from 'react'
import { location, country, zip, latitude, longitude, time, temp_f, temp_c, relative_humidity, wind_dir, wind_mph, wind_gust_mph, wind_kph, wind_gust_kph, pressure_mb, pressure_in, pressure_trend, feelslike_f, feelslike_c, icon_url } from '../../data/san-francisco'

const Test = () => {
  return (
    <div>
      <h1>Test Data</h1>
      location: {location}<br/>
      country: {country}<br/>
      zip: {zip}<br/>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      time: {time}<br/>
      temp_f: {temp_f}<br/>
      temp_c: {temp_c}<br/>
      relative_humidity: {relative_humidity}<br/>
      wind_dir: {wind_dir}<br/>
      wind_mph: {wind_mph}<br/>
      wind_gust_mph: {wind_gust_mph}<br/>
      wind_kph: {wind_kph}<br/>
      wind_gust_kph: {wind_gust_kph}<br/>
      pressure_mb: {pressure_mb}<br/>
      pressure_in: {pressure_in}<br/>
      pressure_trend: {pressure_trend}<br/>
      feelslike_f: {feelslike_f}<br/>
      feelslike_c: {feelslike_c}<br/>
      icon: <img src={icon_url} alt='conditions'/>
    </div>
  )
}
export default Test
