import { IMovie } from '../../Interface/Interface';

export interface ISelectedMovie {
  match: {
    params: {
      id: string;
    };
  };
  MoviesStore: { setMovie: (page: number) => number; movie: IMovie; loading: boolean };
  FavoriteMoviesStore: { favoriteMoviesList: Array<IMovie>; removeMovie: () => object; addMovie: () => IMovie };
}
