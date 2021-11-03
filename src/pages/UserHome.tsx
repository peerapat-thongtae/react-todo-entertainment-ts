import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TodoService from 'services/TodoService';
import { setLoadingPage } from 'store/actions/loader';

const UserHome = (props: any) => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const [watchlistTV, setWatchlistTV] = useState([]);
  const [watchingTV, setWatchingTV] = useState([]);
  const [watchedTV, setWatchedTV] = useState([]);
  const [waitingNextSeasonTV, setWaitingNextSeasonTV] = useState([]);
  useEffect(() => {
    props.setLoadingPage(true);
    Promise.all([
      TodoService.getTodoMovieByStatus('watchlist').then((res) => {
        setWatchlistMovies(res.results);
      }),
      TodoService.getTodoMovieByStatus('watched').then((res) => {
        setWatchedMovies(res.results);
      }),

      TodoService.getTodoTVByStatus('watchlist').then((res) => {
        setWatchlistTV(res.results);
      }),

      TodoService.getTodoTVByStatus('watching').then((res) => {
        setWatchingTV(res.results);
      }),

      TodoService.getTodoTVByStatus('watched').then((res) => {
        setWatchedTV(res.results);
      }),

      TodoService.getTodoTVByStatus('waiting_next_season').then((res) => {
        setWaitingNextSeasonTV(res.results);
      }),
    ]).finally(() => {
      props.setLoadingPage(false);
    });
  }, [props]);
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

      <MovieSlider
        title="My TV Waiting next season"
        endpoint="/todo/tv/waiting_next_season"
        movies={waitingNextSeasonTV}
        mediaType="tv"
      />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setLoadingPage })(UserHome);
