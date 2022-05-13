import React from 'react';
import axios from 'axios';
import './App.css';
import CityForm from './CityForm';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      mapValue: '',
      errorStatus: ''
    }
  }

  locationQuery = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(url);
      console.log('Response from Axios: ', response.data[0].display_name);
      console.log(response);
      this.setState({ locationName: response.data[0], errorStatus: ''});
      const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12`;
      this.setState({ mapValue: map });
    }
    catch(error) {
      this.errorHandler(error);
    }
  }

  changeHandler = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  errorHandler = (error) => {
    console.error(error);
    this.setState({ errorStatus: `Status Code: ${error.response.status} ${error.response.data.error}`, locationName: '' })
  }

  render() {
    return (
      <div className="App">

        <CityForm locationQuery={this.locationQuery} locationName={this.state.locationName} changeHandler={this.changeHandler} mapValue={this.state.mapValue} errorStatus={this.state.errorStatus} />

      </div>
    );
  }
}

export default Main;
