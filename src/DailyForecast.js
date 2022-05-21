import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class DailyForecast extends React.Component {

  render() {
    return (
        <Container>
          <Card className='center' style={{ width: '40rem' }}>
            <Container>
              <Card.Title>{this.props.date}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Container>
          </Card>
        </Container>
    );
  }
}

export default DailyForecast;
