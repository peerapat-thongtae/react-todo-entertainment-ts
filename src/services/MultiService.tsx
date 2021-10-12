import { ApiMovieHelper } from 'utils/APIHelper';

const MultiService = {
  searchMulti: async (searchText: string, query: any = {}) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/search/multi`,
        params: {
          query: searchText,
          ...query,
        },
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default MultiService;
