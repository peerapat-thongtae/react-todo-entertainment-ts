import React from 'react';
import MovieService from 'services/MovieService';
import MovieList from './MovieList';

const MovieUpcoming = () => {
  const getMovies = (query: any) => {
    return MovieService.getMovieByType('upcoming', query);
  };
  return <MovieList getMovies={getMovies} title="Movie Upcoming" />;
};

export default MovieUpcoming;
