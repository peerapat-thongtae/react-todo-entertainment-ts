import { ApiMovieHelper } from 'utils/APIHelper';

const MovieService = {
  getMovieByType: async (type: string) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/movie/${type}`,
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
};

export default MovieService;
