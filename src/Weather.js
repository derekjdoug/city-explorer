import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {

  render() {
    return (
      <div>
      {this.props.forecast &&
        <Card className='center' style={{ width: '40rem' }}>
          <Card.Title>Upcoming Weather Forecast</Card.Title>
          <Card.Text>{this.props.forecast[0]}</Card.Text>
          <Card.Text>{this.props.forecast[1]}</Card.Text>
          <Card.Text>{this.props.forecast[2]}</Card.Text>
        </Card>
        }
      </div>
    );
  }
}

export default Weather;
