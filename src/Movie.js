import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Movie extends React.Component {

  render() {
    return (
      <div>
      <>
        <Container>
          <Card className='movieCard'>
            <Container>
              <Card.Title>{this.props.title}</ Card.Title>
              <Card.Body>
                <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} className="movieImg" />
                <Card.Text>Overview: {this.props.overview}</ Card.Text>
                <Card.Text>Release Date: {this.props.released_on}</ Card.Text>
              </Card.Body>
            </Container>
          </Card>
        </Container>
      </>
      </div>
    );
  }
}

export default Movie;
