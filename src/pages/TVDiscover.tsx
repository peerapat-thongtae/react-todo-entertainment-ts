import React from 'react';
import TVService from 'services/TVService';
import MovieHelper from 'utils/MovieHelper';
import MovieList from './MovieList';

const TVDiscover = (props: any) => {
  const params = MovieHelper.paramsToObject(props.location.search);

  const getMovies = (query: any) => {
    return TVService.discoverTV({ ...params, ...query });
  };
  return (
    <MovieList
      getMovies={getMovies}
      title="TV Discover"
      sortShow
      filterShow
      mediaType="tv"
    />
  );
};

export default TVDiscover;
