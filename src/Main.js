import React from 'react';
import axios from 'axios';
import './App.css';
import CityForm from './CityForm';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: ''
    }
  }

  locationQuery = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log('Response from Axios: ', response.data[0].display_name);
    console.log(response);
    this.setState({ locationName: response.data[0]});
  }

  changeHandler = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return (
      <div className="App">

        <CityForm locationQuery={this.locationQuery} locationName={this.state.locationName} changeHandler={this.changeHandler} />

      </div>
    );
  }
}

export default Main;
