import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';
import dayjs from 'dayjs';
import DropdownTodo from './DropdownTodo';

const MovieCard = (props: any) => {
  const { movie, mediaType } = props;
  return (
    <div className="justify-center items-center">
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white ">
        <div
          className="relative mb-6 card-img"
          style={{ backgroundColor: 'black' }}
        >
          <Link to={`/${mediaType}/${movie.id}`}>
            <img
              className="w-full h-full"
              src={MovieHelper.posterPath(movie.poster_path)}
              alt={movie.title || movie.name}
              style={{ maxHeight: 600 }}
            />
          </Link>

          <div
            className="text-center absolute w-full"
            style={{ bottom: '-30px' }}
          >
            <DropdownTodo />
          </div>
        </div>
        <div className="py-4 px-6 ">
          <Link to={`${mediaType}/${movie.id}`}>
            <p className="tracking-wide text-2xl font-bold card-name link-to">
              {movie.title || movie.name}
            </p>
          </Link>

          <p className="tracking-wide text-sm mb-2">
            {dayjs(movie.release_date || movie.first_air_date).format(
              'DD MMM YYYY'
            )}
          </p>
          <p className="tracking-wide text-sm mb-2">{movie.vote_average}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
