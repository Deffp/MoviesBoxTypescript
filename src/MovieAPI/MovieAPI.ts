import axios from 'axios';

class MovieAPI {
  baseURL: string | undefined;
  key: string | undefined;
  constructor(url: string | undefined, key: string | undefined) {
    this.key = key;
  }

  instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });

  async getResourse(path: string, params?: { page: number } | undefined) {
    const result = this.instance.get(path, { params: { api_key: this.key, ...params } }).then((res) => res.data);
    return result;
  }

  async getAllMovies(page: number = 1) {
    const { results } = await this.getResourse('/movie/now_playing', { page });
    return results;
  }

  async getMovieItem(id: number) {
    return this.getResourse(`/movie/${id}`);
  }

  async getGenres() {
    const { genres } = await this.getResourse('/genre/movie/list');
    return genres;
  }
}

export default new MovieAPI(process.env.REACT_APP_BASE_API_URL, process.env.REACT_APP_KEY);
