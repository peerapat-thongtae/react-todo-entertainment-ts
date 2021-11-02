import React from 'react';
import MovieCard from './MovieCard';

const MovieTab = (props: any) => {
  const { movies, mediaType } = props;
  return (
    <section id="" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-5 gap-8 ">
          {movies &&
            movies.map((movie: any, index: number) => {
              return (
                <div key={index} className="">
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
