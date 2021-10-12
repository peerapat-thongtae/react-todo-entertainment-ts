import React from 'react';
import MovieService from 'services/MovieService';
import MovieList from './MovieList';

const MoviePopular = () => {
  const getMovies = (page: number) => {
    return MovieService.getMovieByType('popular', page);
  };
  return <MovieList getMovies={getMovies} title="Movie Popular" />;
};

export default MoviePopular;
