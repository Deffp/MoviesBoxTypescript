import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

import FavoriteMoviesStore from '../../Store/FavoriteMoviesStore';
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IMovie } from '../../Interface/Interface';
import './FavoriteMoviesList.css';

@inject('rootStore')
@observer
class FavoriteMoviesList extends Component<IMovie> {
  componentDidMount() {
    FavoriteMoviesStore.setFavoriteMovies();
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const { favoriteMoviesList, loading } = FavoriteMoviesStore;
    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <Row className="wrapperList wrapperFavoriteMovies">{favoriteMoviesList.map(this.renderMovieList)}</Row>
        )}
        <Footer />
      </div>
    );
  }
}

export default FavoriteMoviesList;
