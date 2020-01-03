import React from 'react';

import { IMovie } from '../../Interface/Interface';

const AltMoviePoster = (props: { movie: IMovie }) => {
  const checkMoviePoster = () => {
    const { movie } = props;
    return movie.poster_path ? (
      <img className="imgPoster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster" />
    ) : (
      <img
        className="imgPoster"
        src="https://www.moodfit.com/front/images/image-not-found-designerbg.png"
        alt="Poster"
      />
    );
  };
  return <div>{checkMoviePoster()}</div>;
};

export default AltMoviePoster;
