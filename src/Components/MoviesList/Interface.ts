import { IMovie } from '../../Interface/Interface';

export interface IMovieList {
  match: {
    params: {
      page: number;
    };
  };
  moviesList: Array<IMovie>;
  MoviesStore: { setMovies: (page: number) => object; moviesList: Array<IMovie> };
  loading: boolean;
}
