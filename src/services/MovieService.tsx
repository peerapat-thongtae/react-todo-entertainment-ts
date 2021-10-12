import { ApiMovieHelper } from 'utils/APIHelper';

const MovieService = {
  getMovieByType: async (type: string, page = 1) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/movie/${type}?page=${page}`,
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
