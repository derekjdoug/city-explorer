import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CityForm extends React.Component {

  clickHandler = (event) => {
    event.preventDefault();
    this.props.locationQuery();
    this.props.forecastQuery();
  }

  render() {
    return (
      <div>
        <div className='userInput'>
          <Form className='inputForm'style={{ width: '50rem' }}>
            <Form.Control onChange={this.props.changeHandler}
              placeholder= 'What City?'
            />
            <div className="d-grid gap-2">
              <Button className='formButton' onClick={this.clickHandler} type='submit' >
                Explore!
              </Button>
            </div>
          </Form>
        </div>
        {this.props.locationName &&
        <Card className='center' style={{ width: '40rem' }}>
          <Card.Img src={this.props.mapValue}/>
          <Card.Title>You searched for: {this.props.locationName.display_name}</Card.Title>
          <Card.Text>Lattitude: {this.props.locationName.lat} </Card.Text>
          <Card.Text>Longitude: {this.props.locationName.lon} </Card.Text>
        </Card>
        }
        {this.props.errorStatus &&
          <Card className='center' style={{ width: '40rem' }}>
            <Card.Title>Error:</Card.Title>
            <Card.Text>{this.props.errorStatus}</Card.Text>
          </Card>
        }

      </div>
    );
  }
}

export default CityForm;
