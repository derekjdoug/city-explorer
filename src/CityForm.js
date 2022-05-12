import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class CityForm extends React.Component {

  render() {
    return (
      <>
        <input onChange={this.props.changeHandler}
        placeholder= 'What City?'
        />
        <button onClick={this.props.locationQuery}>Explore!</button>
        {this.props.locationName &&
          <>
          <h2>You searched for {this.props.locationName.display_name}</h2>
          <h2>Lattitude: {this.props.locationName.lat} </h2>
          <h2>Longitude: {this.props.locationName.lon} </h2>
          </>
        }
      </>
    );
  }
}

export default CityForm;
