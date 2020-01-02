import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { create } from 'mobx-persist';

import MoviesStore from '../../Store/MoviesStore';
import FavoriteMoviesStore from '../../Store/FavoriteMoviesStore';
import MoviesList from '../MoviesList/MoviesList';
import SelectedMovieItem from '../SelectedMovieItem/SelectedMoviesItem';
import FavoriteMoviesList from '../FavoriteMoviesList/FavoriteMoviesList';
import './App.css';

const rootStore = {
  MoviesStore,
  FavoriteMoviesStore,
};

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

hydrate('FavoriteMoviesList', FavoriteMoviesStore);

const App = () => (
  <div className="Wrapper">
    <Provider rootStore={rootStore}>
      <Router>
        <Switch>
          <Route path="/page/:page" render={(props) => <MoviesList {...props} key={props.match.params.page} />} />
          <Route path="/favorite_movies_list" component={FavoriteMoviesList} />
          <Route path="/movie/:id" component={SelectedMovieItem} />
          <Route path="/" render={(props) => <MoviesList {...props} key={props.match.params.page} />} />
        </Switch>
      </Router>
    </Provider>
  </div>
);
export default App;
