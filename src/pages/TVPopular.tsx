import React from 'react';
import TVService from 'services/TVService';
import MovieList from './MovieList';

const TVPopular = () => {
  const getMovies = (query: any) => {
    return TVService.getTVByType('popular', query);
  };
  return <MovieList getMovies={getMovies} title="TV Popular" mediaType="tv" />;
};

export default TVPopular;
