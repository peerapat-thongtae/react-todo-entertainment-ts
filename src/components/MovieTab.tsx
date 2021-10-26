import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';
import MovieCard from './MovieCard';

const MovieTab = (props: any) => {
  const { movies, mediaType } = props;
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-5 gap-8 row">
          {movies &&
            movies.map((movie: any, index: number) => {
              return (
                <div key={index} className="post">
                  <MovieCard movie={movie} mediaType={mediaType} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MovieTab;
