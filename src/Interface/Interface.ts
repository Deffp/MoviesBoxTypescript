export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<object>;
  homepage: string | null;
  id: number;
  imdb_id: number | null;
  original_language: string;
  genresList: Array<object>;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<object>;
  production_countries: Array<object>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<object>;
  status: string;
  tagline: string | null;
  genre_ids: Array<object>;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IRouteProps {
  history: any;
  location: {
    hash: string;
    pathname: string;
    search: string;
    state: any;
  };
  match: {
    isExact: boolean;
    params: object;
    path: string;
    url: string;
  };
  staticContext: any;
}

export interface IGenresList {}
