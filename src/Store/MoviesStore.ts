import { observable } from 'mobx';
import { persist } from 'mobx-persist';
import _ from 'lodash';

import { IMovie } from '../Interface/Interface';
import MovieAPI from '../MovieAPI/MovieAPI';
import RootStore from './RootStore';

class MoviesStore {
  @observable moviesList: any = [];

  @observable genresList: Array<object> = [];

  @observable loading = true;

  @persist('object') @observable movie: any = { genresList: [] };

  @observable setMovies = async (page: number) => {
    try {
      const movies = await MovieAPI.getAllMovies(page);
      const genresList = await MovieAPI.getGenres();
      const genresIndex = _.keyBy(genresList, 'id');
      const moviesList = movies.map((movie: IMovie) => ({
        ...movie,
        genresList: movie.genre_ids.map((id: any) => genresIndex[id]),
      }));
      this.moviesList = [...moviesList];
      this.genresList = [...genresList];
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  };

  @observable setMovie = async (idMovie: number) => {
    try {
      const genresList = await MovieAPI.getGenres();
      const genresIndex = _.keyBy(genresList, 'id');
      const movie = this.moviesList.find((m: IMovie) => m.id === idMovie);
      const selectedMovie = {
        ...movie,
        genresList: movie.genre_ids.map((id: number) => genresIndex[id]),
      };
      this.movie = {
        ...selectedMovie,
      };
    } catch (fvlist) {
      const genresList = await MovieAPI.getGenres();
      const genresIndex = _.keyBy(genresList, 'id');
      const movie = RootStore.FavoriteMoviesStore.favoriteMoviesList.find((m: IMovie) => m.id === idMovie);
      const selectedMovie = {
        ...movie,
        genresList: movie!.genre_ids.map((id: any) => genresIndex[id]),
      };
      this.movie = {
        ...selectedMovie,
      };
    } finally {
      this.loading = false;
    }
  };
}

export default MoviesStore;
