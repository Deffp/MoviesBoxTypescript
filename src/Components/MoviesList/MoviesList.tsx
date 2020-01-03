import React, { useEffect } from 'react';
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

const MoviesList = inject('rootStore')(
  observer((props: IMovieList) => {
    useEffect(() => {
      const {
        match: { params },
      } = props;
      MoviesStore.setMovies(params.page);
    });

    const renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

    const { moviesList, loading } = MoviesStore;
    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <div className="wrapperList">
            <div className="List">
              {moviesList.map(renderMovieList)}
              <div className="wrapperPagination">
                <Pagination location={props} />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }),
);

export default MoviesList;
