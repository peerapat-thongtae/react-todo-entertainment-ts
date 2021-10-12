import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = (props: any) => {
  const { movies } = props;
  return (
    <div className="grid grid-cols-4 gap-3">
      {movies.map((movie: any, index: number) => (
        <MovieCard key={index} movie={movie} mediaType="movie" />
      ))}
    </div>
  );
};

export default MovieGrid;
