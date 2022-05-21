import React from 'react';
import Row from 'react-bootstrap/Row';
import DailyForecast from './DailyForecast';

class Weather extends React.Component {

  render() {
    return (
      <div>
        <Row xs={1} sm={2} md={3} lg={3}>
          {this.props.forecast &&
          <h1>Upcoming Weather</h1>
          }
          {this.props.forecast &&
          this.props.forecast.map(day => (
            <DailyForecast
            key={day.date}
            date={day.date}
            description={day.description}
            />
            ))}
        </Row>
      </div>
    );
  }
}

export default Weather;
