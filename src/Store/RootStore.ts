import { create } from 'mobx-persist';

import MoviesStore from './MoviesStore';
import FavoriteMoviesStore from './FavoriteMoviesStore';

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

class RootStore {
  MoviesStore: MoviesStore;
  FavoriteMoviesStore: FavoriteMoviesStore;
  constructor() {
    this.MoviesStore = new MoviesStore();
    this.FavoriteMoviesStore = new FavoriteMoviesStore();
    hydrate('FavoriteMoviesList', this.FavoriteMoviesStore);
    hydrate('Movies', this.MoviesStore);
  }
}

const rootStore = new RootStore();

export default rootStore;
