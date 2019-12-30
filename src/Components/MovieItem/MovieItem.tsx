import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import moment from 'moment';

import './MovieItem.css';
import { IMovie } from '../../Interface/Interface';
import AltMoviePoster from '../AltMoviePoster/AltMoviePoster';

class MovieItem extends Component<{ movie: IMovie }> {
  renderGenresMovie = (movie: IMovie) => movie.genresList.map((genres: { name: string }) => genres.name).join(',');

  render() {
    const { movie } = this.props;
    return (
      <Col className="wrapperMovie" md={6} xs={12} sm={6} lg={4} xl={3}>
        <Link to={`/movie/${movie.id}`}>
          <Card className="movie">
            <AltMoviePoster movie={movie} />
            <Card.Body>
              <Card.Title className="title">{movie.title}</Card.Title>
              <Card.Text className="genres">{this.renderGenresMovie(movie)}</Card.Text>
              <div className="releaseDateMovieList">{moment(movie.release_date).format('Y')}</div>
              <div className="voteAverage">{movie.vote_average}</div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  }
}

export default MovieItem;
