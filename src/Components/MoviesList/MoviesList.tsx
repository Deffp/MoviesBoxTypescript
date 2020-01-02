import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import MovieItem from '../MovieItem/MovieItem';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MoviesList.css';
import MoviesStore from '../../Store/MoviesStore';
import { IMovie } from '../../Interface/Interface';
import { IMovieList } from './Interface';

@inject('rootStore')
@observer
class MoviesList extends Component<IMovieList> {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    MoviesStore.setMovies(params.page);
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const { moviesList, loading } = MoviesStore;
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
                <Pagination location={this.props} />
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
