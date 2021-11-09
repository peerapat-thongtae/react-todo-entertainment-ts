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
        params: {
          append_to_response: 'movie_credits,tv_credits,images,external_ids',
        },
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
};

export default PersonService;
