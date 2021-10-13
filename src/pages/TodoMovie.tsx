import React from 'react';
import TodoService from 'services/TodoService';
import MovieList from './MovieList';

const TodoMovie = (props: any) => {
  const { status } = props.match.params;

  const getMovies = (query: any) => {
    return TodoService.getTodoMovieByStatus(status, query);
  };
  return <MovieList getMovies={getMovies} title={`My Movie ${status}`} />;
};

export default TodoMovie;
