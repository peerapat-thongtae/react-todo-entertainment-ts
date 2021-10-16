import React from 'react';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import MovieList from './MovieList';

const MovieDiscover = (props: any) => {
  const params = MovieHelper.paramsToObject(props.location.search);

  const getMovies = (query: any) => {
    return MovieService.discoverMovie({ ...params, ...query });
  };
  return (
    <MovieList
      getMovies={getMovies}
      title="Movie Discover"
      sortShow
      filterShow
    />
  );
};

export default MovieDiscover;
