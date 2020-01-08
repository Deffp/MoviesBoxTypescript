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
  genresList: Array<IGenresList>;
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
  genre_ids: Array<number>;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  movie: object;
}

interface IGenresList {
  id: number;
  name: string;
}
