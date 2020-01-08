import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import MovieItem from '../MovieItem/MovieItem';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MoviesList.css';
import { IMovie } from '../../Interface/Interface';
import { IMovieList } from './Interface';

@inject('MoviesStore')
@observer
class MoviesList extends Component<IMovieList> {
  componentDidMount() {
    const { MoviesStore } = this.props;
    const {
      match: { params },
    } = this.props;
    MoviesStore.setMovies(params.page);
  }

  componentDidUpdate(prevProps: { match: { params: { page: number } } }) {
    const { MoviesStore } = this.props;
    const {
      match: {
        params: { page },
      },
    } = this.props;

    if (prevProps.match.params.page !== page) {
      MoviesStore.setMovies(page);
    }
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const {
      loading,
      match: { params },
      MoviesStore,
    } = this.props;

    const { moviesList } = MoviesStore;

    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <div className="wrapperList">
            <div className="List">
              {moviesList.map(this.renderMovieList)}
              <div className="wrapperPagination">
                <Pagination pages={params.page} />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default MoviesList;
