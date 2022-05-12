import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CityForm extends React.Component {

  render() {
    return (
      <div>
        <Form className='center'style={{ width: '50rem' }}>
          <Form.Control onChange={this.props.changeHandler}
          placeholder= 'What City?'
          />
          <Button onClick={this.props.locationQuery}>Explore!</Button>
        </Form>
        {this.props.locationName &&
        <Card className='center' style={{ width: '40rem' }}>
          <Card.Title>You searched for: {this.props.locationName.display_name}</Card.Title>
          <Card.Text>Lattitude: {this.props.locationName.lat} </Card.Text>
          <Card.Text>Longitude: {this.props.locationName.lon} </Card.Text>
        </Card>
        }

      </div>
    );
  }
}

export default CityForm;
