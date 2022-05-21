import React from 'react';
import axios from 'axios';
import './App.css';
import CityForm from './CityForm';
import Weather from './Weather';
import Movies from './Movies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      weatherData: '',
      movieData: '',
      errorStatus: ''
    }
  }

  locationQuery = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(url);
      console.log('Response from Axios: ', response.data[0].display_name);
      console.log(response);
      this.setState({ locationData: response.data[0], errorStatus: '', weatherData: '' }, this.queryHandler);
    }
    catch(error) {
      this.errorHandler(error);
    }
  }

  forecastQuery = async () => {
    try {
      const url = `${process.env.REACT_APP_WEATHER}?lat=${this.state.locationData.lat}&lon=${this.state.locationData.lon}`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ weatherData: response.data });
    } catch (error) {
        this.errorHandler(error);
    }
  }

  movieQuery = async () => {
    try {
      const url = `${process.env.REACT_APP_MOVIE}?city=${this.state.locationData.display_name}`;
      console.log(url);
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ movieData: response.data });
    } catch (error) {
        this.errorHandler(error);
    }
  }

  changeHandler = (event) => {
    this.setState({ searchQuery: event.target.value.toLowerCase(), weatherData: '' });
  }

  errorHandler = (error) => {
    console.error(error);
    this.setState({ errorStatus: `Status Code: ${error.response.status} ${error.response.data.error}`, locationData: '' })
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.locationQuery();
  }

  queryHandler = () => {
    this.forecastQuery();
    this.movieQuery();
  }

  render() {
    return (
      <div className="App">
        <CityForm locationData={this.state.locationData} changeHandler={this.changeHandler} clickHandler={this.clickHandler} errorStatus={this.state.errorStatus} forecast={this.state.weatherData} />
        <Weather forecast={this.state.weatherData} locationName={this.state.locationName} />
        <Movies movieData={this.state.movieData} />
      </div>
    );
  }
}

export default Main;
