import React from 'react'
import './style.css'

const LocationDetails = ({ location, elevation, latitude, longitude }) => {
  return (
    <di>
      <h2>Location Data for {location}</h2>
      <ul>
        <li>Elevation: {elevation}</li>
        <li>Latitude: {latitude}</li>
        <li>Longitude: {longitude}</li>
      </ul>
    </di>
  )
}
export default LocationDetails
