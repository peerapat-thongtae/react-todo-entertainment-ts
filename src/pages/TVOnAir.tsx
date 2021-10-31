import React from 'react';
import TVService from 'services/TVService';
import MovieList from './MovieList';

const TVOnAir = () => {
  const getMovies = (query: any) => {
    return TVService.getTVByType('on_the_air', query);
  };
  return <MovieList getMovies={getMovies} title="TV On Air" mediaType="tv" />;
};

export default TVOnAir;
