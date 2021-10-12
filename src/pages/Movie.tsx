import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieService from 'services/MovieService';
import { setLoadingPage } from 'store/actions/loader';
import { setOpenModal } from 'store/actions/modal';

const Movie = (props: any) => {
  const [moviePopulars, setMoviePopulars] = useState([]);
  const [movieUpcomings, setMovieUpcomings] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);
  useEffect(() => {
    props.setLoadingPage(true);
    MovieService.getMovieByType('popular', { page: 1 }).then((res) => {
      setMoviePopulars(res.results);
    });

    MovieService.getMovieByType('upcoming', { page: 1 }).then((res) => {
      setMovieUpcomings(res.results);
    });

    MovieService.getMovieByType('top_rated', { page: 1 }).then((res) => {
      setMovieTopRated(res.results);
      props.setLoadingPage(false);
    });
  }, [props]);

  return (
    <Layout>
      <MovieSlider
        title="Popular"
        type="popular"
        movies={moviePopulars}
        mediaType="movie"
      />
      <MovieSlider
        title="Upcoming"
        type="upcoming"
        movies={movieUpcomings}
        mediaType="movie"
      />
      <MovieSlider
        title="Top Rated"
        type="top_rated"
        movies={movieTopRated}
        mediaType="movie"
      />
    </Layout>
  );
};

export default connect(null, { setLoadingPage, setOpenModal })(
  withRouter(Movie)
);
