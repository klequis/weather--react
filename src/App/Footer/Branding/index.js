import React from 'react'
import './style.css'
import iWU from './weather-underground.logo.png'
import iTVC from './tvc-logo.png'

const Branding = () => {
  return (

    <div id='Branding' className='container section'>
      <div className='row align-items-center justify-contnet-center'>
        <div className='col wu-col'>
          <img className='wu-logo img-fluid' src={iWU} alt='weather underground' />
          <div>Data provided by Weather Underground</div>
        </div>
        <div className='col tvc-col'>
          <a href='http://trivalleycoders.com'><img className='tvc-logo' src={iTVC} alt='trivalley coders' /></a>

          <div>TrivalleyCoders: klequis</div>
        </div>
      </div>
    </div>
  )
}
export default Branding
