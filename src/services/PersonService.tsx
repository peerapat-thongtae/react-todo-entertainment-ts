import { ApiMovieHelper } from 'utils/APIHelper';

const PersonService = {
  getPersonByType: async (type: string, query: any) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/person/${type}`,
        params: query,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  getPersonDetail: async (personId: number) => {
    try {
      const res = await ApiMovieHelper({
        method: 'GET',
        url: `/3/person/${personId}`,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default PersonService;
