import React from 'react'
import './style.css'
import LocationDetails from './LocationDetails'
import Branding from './Branding'

const Footer = () => {
  return (
    <div id='Footer'>
      <LocationDetails
        location='San Ramon'
        elevation='161.8'
        latitude='37.36'
        longitude='-121.94'
      />
      <Branding />
    </div>
  )
}
export default Footer
