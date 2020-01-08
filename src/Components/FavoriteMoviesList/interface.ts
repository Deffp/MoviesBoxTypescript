import { IMovie } from '../../Interface/Interface';

export default interface IFavoriteMoviesList {
  FavoriteMoviesStore: {
    setFavoriteMovies: () => object;
    favoriteMoviesList: Array<IMovie>;
  };
  loading: boolean;
}
