import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieSlider from 'components/MovieSlider';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TodoService from 'services/TodoService';
import { setLoadingPage } from 'store/actions/loader';

const UserHome = (props: any) => {
  const [watchlistMovies, setWatchlistMovies] = useState<any>();
  const [watchedMovies, setWatchedMovies] = useState<any>();

  const [watchlistTV, setWatchlistTV] = useState<any>();
  const [watchingTV, setWatchingTV] = useState<any>();
  const [watchedTV, setWatchedTV] = useState<any>();
  const [waitingNextSeasonTV, setWaitingNextSeasonTV] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);

    Promise.all([
      TodoService.getTodoMovieByStatus('watchlist').then((res) => {
        setWatchlistMovies(res);
      }),
      TodoService.getTodoMovieByStatus('watched').then((res) => {
        setWatchedMovies(res);
      }),

      TodoService.getTodoTVByStatus('watchlist').then((res) => {
        setWatchlistTV(res);
      }),

      TodoService.getTodoTVByStatus('watching').then((res) => {
        setWatchingTV(res);
      }),

      TodoService.getTodoTVByStatus('watched').then((res) => {
        setWatchedTV(res);
      }),

      TodoService.getTodoTVByStatus('waiting_next_season').then((res) => {
        setWaitingNextSeasonTV(res);
      }),
    ]).finally(() => {
      setLoading(false);
    });
  }, []);
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div id="movie_watchlist">
            <MovieSlider
              title={`My Movie Watchlist (${watchlistMovies.count})`}
              endpoint="/todo/movie/watchlist"
              movies={watchlistMovies.results}
              mediaType="movie"
            />
          </div>

          <MovieSlider
            title={`My Movie Watched (${watchedMovies.count})`}
            endpoint="/todo/movie/watched"
            movies={watchedMovies.results}
            mediaType="movie"
          />

          <MovieSlider
            title={`My TV Watchlist (${watchlistTV.count})`}
            endpoint="/todo/tv/watchlist"
            movies={watchlistTV.results}
            mediaType="tv"
          />

          <MovieSlider
            title={`My TV Watching (${watchingTV.count})`}
            endpoint="/todo/tv/watching"
            movies={watchingTV.results}
            mediaType="tv"
          />

          <MovieSlider
            title={`My TV Watched (${watchedTV.count})`}
            endpoint="/todo/tv/watched"
            movies={watchedTV.results}
            mediaType="tv"
          />

          <MovieSlider
            title={`My TV Waiting next season (${waitingNextSeasonTV.count})`}
            endpoint="/todo/tv/waiting_next_season"
            movies={waitingNextSeasonTV.results}
            mediaType="tv"
          />
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setLoadingPage })(UserHome);
