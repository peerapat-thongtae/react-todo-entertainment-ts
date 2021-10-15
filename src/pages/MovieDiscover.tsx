import React from 'react';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import MovieList from './MovieList';

const MovieDiscover = (props: any) => {
  let params = new URLSearchParams(props.location.search);
  params = MovieHelper.paramsToObject(params);

  const getMovies = (query: any) => {
    return MovieService.discoverMovie({ ...params, ...query });
  };
  return <MovieList getMovies={getMovies} />;
};

export default MovieDiscover;
