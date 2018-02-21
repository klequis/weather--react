import React, { Component } from 'react'
import './style.css'
import Header from './Header'
import LocationLookup from './LocationLookup'
import CurrentConditions from './CurrentConditions'
import Forecast from './Forecast'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: 'San Ramon',
      weather: null,
      units: '',
    }
  }

  componentDidMount() {
    this.getWeather(this.state.currentCity);
  }

  render() {
    // console.log('weather: ', this.state.weather);
    return (
      <div id='App'>
        <Header />
        <LocationLookup />
        <CurrentConditions
          currentConditions={this.state.weather}
        />
        <Forecast />
        <Footer />
      </div>
    )
  }

  getWeather(city) {
    const weatherURLRoot = 'http://api.wunderground.com/api/85bddf9c5a474df5/geolookup/conditions/q/CA/';
    const url = `${weatherURLRoot}${city}.json`;

    return fetch(url)
      .then((data) => {
        return this.formatWeather(data);
      })
      .then((data) => {
        // console.log('data', data)
        this.setState({
          weather: data,
        })
      })
  }


  async formatWeather(data) {
    const jsonData = await data.json();

    const o = {
      branding: jsonData.current_observation.image,
      current_observation: {
        station_id: jsonData.current_observation.station_id,
        observation_time: jsonData.current_observation.observation_time,
        weather: jsonData.current_observation.weather,
        temp_f: jsonData.current_observation.temp_f,
        temp_c: jsonData.current_observation.temp_c,
        relative_humidity: jsonData.current_observation.relative_humidity,
        wind_dir: jsonData.current_observation.wind_dir,
        wind_mph: jsonData.current_observation.wind_mph,
        wind_gust_mph: jsonData.current_observation.wind_gust_mph,
        wind_kph: jsonData.current_observation.wind_kph,
        wind_gust_kpy: jsonData.current_observation.wind_gust_kph,
        pressure_mp: jsonData.current_observation.pressure_mb,
        pressure_in: jsonData.current_observation.pressure_in,
        pressure_trend: jsonData.current_observation.pressure_trend,
        dewpoint_f: jsonData.current_observation.dewpoint_f,
        dewpoint_c: jsonData.current_observation.dewpoint_c,
        heat_index_f: jsonData.current_observation.heat_index_f,
        heat_index_c: jsonData.current_observation.heat_index_c,
        windchill_f: jsonData.current_observation.windchill_f,
        windchill_c: jsonData.current_observation.windchill_c,
        feelslike_f: jsonData.current_observation.feelslike_f,
        feelslike_c: jsonData.current_observation.feelslike_c,
        uv: jsonData.current_observation.UV,
        icon: jsonData.current_observation.icon,
        icon_url: jsonData.current_observation.icon_url,
      },
      location: jsonData.current_observation.display_location,
      //days: jsonData.forecast.simpleforecast.forecastday,
    };
    // console.log('o  :', o);
    // console.log('o.current_observation: ', o.current_observation.station_id);
    // console.log('o.current_observation-icon: ', o.current_observation.icon);
    return o
  }

}
export default App
