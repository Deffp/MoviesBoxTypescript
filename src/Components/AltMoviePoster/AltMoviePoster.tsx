import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { IMovie } from '../../Interface/Interface';

export default class AltMoviePoster extends Component<{
  movie: IMovie;
}> {
  checkMoviePoster = () => {
    const { movie } = this.props;
    return movie.poster_path ? (
      <Card.Img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster" />
    ) : (
      <Card.Img src="https://www.moodfit.com/front/images/image-not-found-designerbg.png" alt="Poster" />
    );
  };

  render() {
    return <div>{this.checkMoviePoster()}</div>;
  }
}
