import React from 'react';
import MovieService from 'services/MovieService';
import MovieList from './MovieList';

const MoviePopular = () => {
  const getMovies = (query: any) => {
    return MovieService.getMovieByType('popular', query);
  };
  return <MovieList getMovies={getMovies} title="Movie Popular" />;
};

export default MoviePopular;
