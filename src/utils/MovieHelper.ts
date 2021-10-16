const MovieHelper = {
  posterPath: (path: string) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;
  },
  paramsToObject: (queryString: any) => {
    const params = new URLSearchParams(queryString);
    const entries: any = params.entries();
    const result: any = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  },

  objectToQueryString: (obj: any) => {
    return new URLSearchParams(obj).toString();
  },
};

export default MovieHelper;
