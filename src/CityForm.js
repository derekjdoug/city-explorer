import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CityForm extends React.Component {


  render() {
    return (
      <div>
        <div className='userInput'>
          <Form className='inputForm'style={{ width: '50rem' }}>
            <Form.Control onChange={this.props.changeHandler}
              placeholder= 'What City?'
            />
            <div className="d-grid gap-2">
              <Button className='formButton' onClick={this.props.clickHandler} type='submit' >
                Explore!
              </Button>
            </div>
          </Form>
        </div>
        {this.props.locationData &&
        <Card className='center' style={{ width: '40rem' }}>
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=12`}/>
          <Card.Title>You searched for: {this.props.locationData.display_name}</Card.Title>
          <Card.Text>Lattitude: {this.props.locationData.lat} </Card.Text>
          <Card.Text>Longitude: {this.props.locationData.lon} </Card.Text>
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
