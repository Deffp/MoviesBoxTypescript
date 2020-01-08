import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

import IFavoriteMoviesList from './interface';
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IMovie } from '../../Interface/Interface';
import './FavoriteMoviesList.css';

@inject('FavoriteMoviesStore')
@observer
class FavoriteMoviesList extends Component<IFavoriteMoviesList> {
  componentDidMount() {
    const { FavoriteMoviesStore } = this.props;
    FavoriteMoviesStore.setFavoriteMovies();
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const { FavoriteMoviesStore, loading } = this.props;
    const { favoriteMoviesList } = FavoriteMoviesStore;
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
