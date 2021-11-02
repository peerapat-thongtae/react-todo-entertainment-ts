import { ApiMovieHelper } from 'utils/APIHelper';

const TVService = {
  getTVByType: async (type: string, query = {}) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/tv/${type}`,
        params: query,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getTVDetail: async (movieId: string, query = {}) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/tv/${movieId}`,
        params: { ...query, append_to_response: 'credits,similar' },
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getTVWatchProviders: async (movieId: string, query = {}) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/tv/${movieId}/watch/providers`,
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
        url: `/3/genre/tv/list`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  discoverTV: async (query: any) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/discover/tv`,
        params: query,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default TVService;
