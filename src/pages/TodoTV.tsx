import React from 'react';
import TodoService from 'services/TodoService';
import MovieList from './MovieList';

const TodoTV = (props: any) => {
  const { status } = props.match.params;

  const getMovies = (query: any) => {
    return TodoService.getTodoTVByStatus(status, query);
  };
  return (
    <MovieList getMovies={getMovies} title={`My TV ${status}`} mediaType="tv" />
  );
};

export default TodoTV;
