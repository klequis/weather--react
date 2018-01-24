import React from 'react'
import './style.css'

const LocationDetails = ({ location, elevation, latitude, longitude }) => {
  return (
    <div>
      <h2>Location Data for {location}</h2>
      <ul>
        <li>Elevation: {elevation}</li>
        <li>Latitude: {latitude}</li>
        <li>Longitude: {longitude}</li>
      </ul>
    </div>
  )
}
export default LocationDetails
