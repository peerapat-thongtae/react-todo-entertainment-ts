import { ApiMovieHelper } from 'utils/APIHelper';

const MovieService = {
  getMovieByType: async (type: string, query: any) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/movie/${type}`,
        params: query,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getMovieDetail: async (movieId: string) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/movie/${movieId}`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getMovieWatchProviders: async (movieId: string) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/movie/${movieId}/watch/providers`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  discoverMovie: async (query: any) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/discover/movie`,
        params: query,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getGenres: async () => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/genre/movie/list`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default MovieService;
