import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import MovieService from 'services/MovieService';
import { setLoadingPage } from 'store/actions/loader';
import { setOpenModal } from 'store/actions/modal';
import MovieHelper from 'utils/MovieHelper';

const Movie = (props: any) => {
  const [moviePopulars, setMoviePopulars] = useState([]);
  const [movieUpcomings, setMovieUpcomings] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);
  useEffect(() => {
    props.setLoadingPage(true);
    Promise.all([
      MovieService.getMovieByType('popular', { page: 1 }).then((res) => {
        setMoviePopulars(res.results);
      }),
      MovieService.getMovieByType('upcoming', { page: 1 }).then((res) => {
        setMovieUpcomings(res.results);
      }),
      MovieService.getMovieByType('top_rated', { page: 1 }).then((res) => {
        setMovieTopRated(res.results);
      }),
    ])
      .catch((err) => {
        toast.error(err.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        props.setLoadingPage(false);
      });
  }, [props]);

  return (
    <Layout>
      <MovieSlider
        title="Popular"
        endpoint={`/movie/discover?${MovieHelper.objectToQueryString({
          sort_by: 'popularity.desc',
          'vote_count.gte': 500,
        })}`}
        movies={moviePopulars}
        mediaType="movie"
      />
      <MovieSlider
        title="Upcoming"
        endpoint={`/movie/discover?${MovieHelper.objectToQueryString({
          sort_by: 'popularity.desc',
          'release_date.gte': dayjs().format('YYYY-MM-DD'),
          'release_date.lte': dayjs().add(30, 'day').format('YYYY-MM-DD'),
        })}`}
        movies={movieUpcomings}
        mediaType="movie"
      />
      <MovieSlider
        title="Top Rated"
        endpoint={`/movie/discover?${MovieHelper.objectToQueryString({
          sort_by: 'vote_average.desc',
          'vote_count.gte': 500,
        })}`}
        movies={movieTopRated}
        mediaType="movie"
      />
    </Layout>
  );
};

export default connect(null, { setLoadingPage, setOpenModal })(
  withRouter(Movie)
);
