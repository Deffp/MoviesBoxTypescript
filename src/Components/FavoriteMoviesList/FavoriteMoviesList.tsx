import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

import FavoriteMoviesStore from '../../Store/FavoriteMoviesStore';
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IMovie } from '../../Interface/Interface';
import './FavoriteMoviesList.css';

const FavoriteMoviesList = inject('rootStore')(
  observer((props: IMovie) => {
    useEffect(() => {
      FavoriteMoviesStore.setFavoriteMovies();
    });

    const renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

    const { favoriteMoviesList, loading } = FavoriteMoviesStore;
    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <Row className="wrapperList wrapperFavoriteMovies">{favoriteMoviesList.map(renderMovieList)}</Row>
        )}
        <Footer />
      </div>
    );
  }),
);

export default FavoriteMoviesList;
