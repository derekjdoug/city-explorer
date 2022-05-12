import axios from 'axios';
import React from 'react';

class CityForm extends React.Component {
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
    this.setState({ locationName: response.data[0].display_name});
  }

  render() {
    return (
      <>
        <input onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder= 'What City?' />
        <button onClick={this.locationQuery}>Take Me There!</button>
        {this.state.locationName &&
          <h2>You searched for {this.state.locationName}</h2>
        }
      </>
    );
  }
}

export default CityForm;
