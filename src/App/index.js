import React, {Component} from 'react'
import './style.css'
import Header from './Header'
import LocationLookup from './LocationLookup'
import CurrentConditions from './CurrentConditions'
import Forecast from './Forecast'
import Footer from './Footer'
import Test from './Test'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: '',
      weather: {},
      units: '',
    }
  }

  render() {
    return (
      <div id='App'>
        <Test />
        <Header />
        <LocationLookup />
        <CurrentConditions />
        <Forecast />
        <Footer />
      </div>
    )
  }
}
export default App
