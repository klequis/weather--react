import React from 'react'
import './style.css'
import iWU from './weather-underground.logo.png'
import iTVC from './tvc-logo.png'

const Branding = () => {
  return (
    <div id='Branding'>
      <div>
        <p>Data provided by Weather Underground</p>
        <img src={iWU} alt='weather underground' />
      </div>
      <div>
        <p>Site created by TriValley Coders: klequis</p>
        <img src={iTVC} alt='trivalley coders' />
      </div>
    </div>
  )
}
export default Branding
