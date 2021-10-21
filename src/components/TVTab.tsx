import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const TVTab = (props: any) => {
  const { movies } = props;
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="grid grid-cols-6 gap-8 row">
          {movies &&
            movies.map((movie: any, index: number) => {
              return (
                <div key={index} className="post">
                  <Link to={`/tv/${movie.id}`}>
                    <div className="card__img mb-2">
                      <img
                        src={MovieHelper.posterPath(movie.poster_path)}
                        className="lazyload"
                      />
                    </div>
                    <h3 className="cast_name">{movie.title || movie.name}</h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TVTab;
