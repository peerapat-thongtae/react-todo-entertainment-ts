const MovieHelper = {
  posterPath: (path: string) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;
  },
  paramsToObject: (entries: any) => {
    const result: any = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  },
};

export default MovieHelper;
