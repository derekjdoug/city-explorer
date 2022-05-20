import React from 'react';
import Movie from './Movie';
import Row from 'react-bootstrap/Row';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.movieData &&
          this.props.movieData.map(movie => (
            <Movie
              average_votes={movie.average_votes}
              image_url={movie.image_url}
              overview={movie.overview}
              popularity={movie.popularity}
              released_on={movie.released_on}
              title={movie.title}
              total_votes={movie.total_votes}
            />
          ))}
        </Row>
      </>
    );
  }
}

export default Movies;
