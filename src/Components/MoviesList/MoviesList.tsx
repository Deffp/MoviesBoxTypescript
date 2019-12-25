import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { observer } from 'mobx-react';
import RootStore from '../../Store/RootStore';

import MovieItem from '../MovieItem/MovieItem';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MoviesList.css';
import { IMovie } from '../../Interface/Interface';
import { IMovieList } from './Interface';

class MoviesList extends Component<IMovieList> {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    RootStore.MoviesStore.setMovies(params.page);
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const { moviesList, loading } = RootStore.MoviesStore;
    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <Row className="wrapperList">
            {moviesList.map(this.renderMovieList)}
            <Pagination location={this.props} />
          </Row>
        )}
        <Footer />
      </div>
    );
  }
}

export default observer(MoviesList);
