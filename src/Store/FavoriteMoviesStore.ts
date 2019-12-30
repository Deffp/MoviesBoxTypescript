import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

import _ from 'lodash';

import { IMovie } from '../Interface/Interface';
import MovieAPI from '../MovieAPI/MovieAPI';

class FavoriteMoviesStore {
  @persist('list') @observable favoriteMoviesList: Array<IMovie> = [];

  @observable loading: boolean = true;

  @action setFavoriteMovies = async () => {
    const genresList = await MovieAPI.getGenres();
    const genresIndex = _.keyBy(genresList, 'id');
    const favoriteList = this.favoriteMoviesList.map((movie) => ({
      ...movie,
      genresList: movie.genresList.map((id: { id: number }) => genresIndex[id.id]),
    }));

    this.favoriteMoviesList = [...favoriteList];
    this.loading = false;
  };

  @action addMovie = (movie: IMovie) => {
    this.favoriteMoviesList = [movie, ...this.favoriteMoviesList];
  };

  @action removeMovie = (id: number) => {
    const removeMovie = this.favoriteMoviesList.filter((next) => next.id !== id);
    this.favoriteMoviesList = [...removeMovie];
  };
}

export default FavoriteMoviesStore;
