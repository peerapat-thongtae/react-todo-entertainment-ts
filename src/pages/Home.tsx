import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useEffect, useState } from 'react';
import TodoService from 'services/TodoService';

const Home = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const [watchlistTV, setWatchlistTV] = useState([]);
  const [watchingTV, setWatchingTV] = useState([]);
  const [watchedTV, setWatchedTV] = useState([]);
  useEffect(() => {
    TodoService.getMyMovieWatchlist().then((res) => {
      setWatchlistMovies(res);
    });

    TodoService.getMyMovieWatched().then((res) => {
      setWatchedMovies(res);
    });

    TodoService.getTVWatchlist().then((res) => {
      setWatchlistTV(res);
    });

    TodoService.getTVWatching().then((res) => {
      setWatchingTV(res);
    });

    TodoService.getTVWatched().then((res) => {
      setWatchedTV(res);
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

      <MovieSlider
        title="My TV Watchlist"
        endpoint="/todo/tv/watchlist"
        movies={watchlistTV}
        mediaType="tv"
      />

      <MovieSlider
        title="My TV Watching"
        endpoint="/todo/tv/watching"
        movies={watchingTV}
        mediaType="tv"
      />

      <MovieSlider
        title="My TV Watched"
        endpoint="/todo/tv/watched"
        movies={watchedTV}
        mediaType="tv"
      />
    </Layout>
  );
};

export default Home;
