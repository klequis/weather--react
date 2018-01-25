import React from 'react'
import './style.css'
import { location, datetime } from '../../data/san-francisco'

const Header = () => {
  return (
    <div id='header' className='header section'>
      <h1>{location}</h1>
      <p>{datetime}</p>
    </div>
  )
}
export default Header
