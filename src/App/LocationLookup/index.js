import React from 'react'
import './style.css'

const LocationLookup = () => {
  return (
    <div className='row justify-content-center align-items-center section'>
      <div className='col-1'>
        City
      </div>
      <div className='col-5 col-city-input'>
        <input className='city-input' name='city' placeholder='enter city'/>
      </div>
      <div className='col-2'>
        <button type='button' className='btn btn-success'>Lookup</button>
      </div>
      <div className='col-1'>
        <button type='button' className='btn btn-primary'>F</button>
      </div>
      <div className='col-1'>
        <button type='button' className='btn btn-primary' disabled>C</button>
      </div>
    </div>
  )
}
export default LocationLookup
