import React from 'react';
import MovieService from 'services/MovieService';
import MovieList from './MovieList';

const MovieUpcoming = () => {
  const getMovies = (page: number) => {
    return MovieService.getMovieByType('upcoming', page);
  };
  return <MovieList getMovies={getMovies} title="Movie Upcoming" />;
};

export default MovieUpcoming;
