import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useEffect, useState } from 'react';
import TodoService from 'services/TodoService';

const Home = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  useEffect(() => {
    TodoService.getMyMovieWatchlist().then((res) => {
      setWatchlistMovies(res);
    });

    TodoService.getMyMovieWatched().then((res) => {
      setWatchedMovies(res);
    });
  }, []);
  return (
    <Layout>
      <MovieSlider
        title="My Movie Watchlist"
        endpoint="/todo/movie/watchlist"
        movies={watchlistMovies}
        mediaType="movie"
      />

      <MovieSlider
        title="My Movie Watched"
        endpoint="/todo/movie/watched"
        movies={watchedMovies}
        mediaType="movie"
      />
    </Layout>
  );
};

export default Home;
