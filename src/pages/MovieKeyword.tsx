import React, { useEffect, useState } from 'react';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import MovieList from './MovieList';

const MovieKeyword = (props: any) => {
  const params = MovieHelper.paramsToObject(props.location.search);
  const keywordId = props.match.params.id;
  const [keyword, setKeyword]: any = useState({});

  useEffect(() => {
    MovieService.getKeywordDetail(keywordId).then((res: any) => {
      setKeyword(res);
    });
  }, [keywordId]);
  const getMovies = (query: any) => {
    return MovieService.getByKeyword(keywordId, { ...params, ...query });
  };
  return (
    <MovieList
      getMovies={getMovies}
      title={`Movies keyword : ${keyword.name || ''}`}
    />
  );
};

export default MovieKeyword;
