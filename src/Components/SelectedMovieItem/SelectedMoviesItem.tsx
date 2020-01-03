import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import classNames from 'classnames/bind';
import moment from 'moment';

import { IMovie } from '../../Interface/Interface';
import { ISelectedMovie } from './Interface';
import MoviesStore from '../../Store/MoviesStore';
import FavoriteMoviesStore from '../../Store/FavoriteMoviesStore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import './SelectedMovieItem.css';

const SelectedMovieItem = (props: ISelectedMovie) => {
  useEffect(() => {
    const { setMovie } = MoviesStore;
    const {
      match: {
        params: { id },
      },
    } = props;
    setMovie(parseInt(id));
  });

  const displayGenres = (movie: IMovie) => movie.genresList.map((genres: { name: string }) => genres.name).join(',');

  const buttonChange = (): object => {
    const { favoriteMoviesList, addMovie, removeMovie } = FavoriteMoviesStore;
    const { movie } = MoviesStore;

    return _.find(favoriteMoviesList, { id: movie.id }) ? (
      <button
        type="button"
        className={classNames({ buttonFavorite: true }, { active: true })}
        onClick={_.partial(removeMovie, movie.id)}>
        <span>Remove from favorites</span>
        <FontAwesomeIcon className="iconInButton" icon={faStar} />
      </button>
    ) : (
      <button
        type="button"
        className={classNames({ buttonFavorite: true }, { active: false })}
        onClick={_.partial(addMovie, movie)}>
        <span>Add to favorites</span>
        <FontAwesomeIcon className="iconInButton" icon={faStar} />
      </button>
    );
  };

  const { movie, loading } = MoviesStore;
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="wrapperSelectedMovieHeader">
            <div
              className="topPoster"
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}>
              <div className="topPosterGradient" />
              <div className="infoMovie">
                <span className="originalTitle">{movie.original_title}</span>
                <div className="genres">
                  <span className="releaseDate">{moment(movie.release_date).format('Y')} </span>
                  {displayGenres(movie)}
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="infoWrapper">
              <img
                className="posterMovie"
                alt="PosterMovie"
                src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              />
              <div className="btnSelectedMovie">{buttonChange()}</div>
            </div>
            <div className="wrapperOverview">
              <h2>Overview</h2>
              {movie.overview}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default observer(SelectedMovieItem);
