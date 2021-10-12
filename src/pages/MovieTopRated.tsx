import React from 'react';
import MovieService from 'services/MovieService';
import MovieList from './MovieList';

const MovieTopRated = () => {
  const getMovies = (query: any) => {
    return MovieService.getMovieByType('top_rated', query);
  };
  return <MovieList getMovies={getMovies} title="Movie Top Rated" />;
};

export default MovieTopRated;
