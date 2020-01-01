import React, { Component } from "react";
import { observer } from "mobx-react";
// import RootStore from "../../Store/RootStore";

import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MoviesList.css";
import MoviesStore from "../../Store/MoviesStore";
import { IMovie } from "../../Interface/Interface";
import { IMovieList } from "./Interface";

class MoviesList extends Component<IMovieList> {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    MoviesStore.setMovies(params.page);
  }

  renderMovieList = (movie: IMovie) => <MovieItem key={movie.id} movie={movie} />;

  render() {
    const { moviesList, loading } = MoviesStore;
    return (
      <div>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <div className='wrapperList'>
            <div className='List'>
              {moviesList.map(this.renderMovieList)}
              <Pagination location={this.props} />
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default observer(MoviesList);
