import { observable, toJS, action } from "mobx";
import { persist, create } from "mobx-persist";
import _ from "lodash";

import { IMovie } from "../Interface/Interface";
import FavoriteMoviesStore from "./FavoriteMoviesStore";
import MovieAPI from "../MovieAPI/MovieAPI";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

class MoviesStore {
  @observable moviesList: Array<IMovie> = [];

  @observable genresList: Array<object> = [];

  @observable loading: boolean = true;

  @persist("object") @observable movie: any = { genresList: [] };

  @action setMovies = async (page: number) => {
    try {
      const movies = await MovieAPI.getAllMovies(page);
      const genresList = await MovieAPI.getGenres();
      const genresIndex = _.keyBy(genresList, "id");
      const moviesList = movies.map((movie: IMovie) => ({
        ...movie,
        genresList: movie.genre_ids.map((id: number) => genresIndex[id])
      }));
      this.moviesList = [...moviesList];
      this.genresList = [...genresList];
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
    hydrate("FavoriteMoviesList", FavoriteMoviesStore);
    hydrate("movie", MoviesStore);
  };

  @action setMovie = async (idMovie: number) => {
    try {
      const genresList = await MovieAPI.getGenres();
      const movie = await MovieAPI.getMovieItem(idMovie);
      const genresIndex = _.keyBy(genresList, "id");
      const selectedMovie = {
        ...movie,
        genresList: movie.genres.map((id: { id: number }) => genresIndex[id.id])
      };
      this.movie = {
        ...selectedMovie
      };
    } catch (error) {
      console.log(toJS(error));
    } finally {
      this.loading = false;
    }
  };
}

export default new MoviesStore();
