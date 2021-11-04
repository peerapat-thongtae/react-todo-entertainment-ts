import dayjs from 'dayjs';

const MovieHelper = {
  posterPath: (path: string) => {
    if (!path) {
      return '/poster/defaultposter.png';
    }
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;
  },
  logoPath: (path: string) => {
    if (!path) {
      return '/poster/defaultoister,ong';
    }
    return `https://www.themoviedb.org/t/p/original${path}`;
  },
  originalImagePath: (path: string) => {
    if (!path) {
      return '/poster/defaultoister,ong';
    }
    return `https://www.themoviedb.org/t/p/original${path}`;
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

  releaseDate: (date: Date) => {
    if (date) {
      return dayjs(date).format('DD MMM YYYY');
    }
    return '-';
  },

  youtubePath: (key: string) => {
    const youtubeData = {
      thumbnail: `https://img.youtube.com/vi/${key}/mqdefault.jpg`,
      src: `https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`,
      url: `https://youtube.com/watch?v=${key}`,
    };

    return youtubeData;
  },
};

export default MovieHelper;
