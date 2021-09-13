import { ApiMovieHelper } from 'utils/APIHelper';

const TVService = {
  getTVByType: async (type: string) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/tv/${type}`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getTVDetail: async (movieId: string) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/tv/${movieId}`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default TVService;
