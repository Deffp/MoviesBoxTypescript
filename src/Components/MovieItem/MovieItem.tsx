import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './MovieItem.css';
import { IMovie } from '../../Interface/Interface';
import AltMoviePoster from '../AltMoviePoster/AltMoviePoster';

const MovieItem = (props: { movie: IMovie }) => {
  const renderGenresMovie = (movie: IMovie) =>
    movie.genresList.map((genres: { name: string }) => genres.name).join(',');

  const { movie } = props;

  return (
    <div className="wrapperMovie">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie">
          <AltMoviePoster movie={movie} />
          <div className="gradiend" />
          <div className="infoMovie">
            <div className="titleName">{movie.title}</div>
            <div className="genresMovie"> {renderGenresMovie(movie)}</div>
            <span className="releaseDateMovieList">{moment(movie.release_date).format('Y')}</span>
            <div className="voteAverage">
              <span className="textVoteAverage">{movie.vote_average}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
