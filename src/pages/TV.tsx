import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TVService from 'services/TVService';
import { setLoadingPage } from '../store/actions/loader';

const TV = (props: any) => {
  const [tvPopulars, setTVPopulars] = useState([]);
  const [tvTopRated, setTVTopRated] = useState([]);
  const [tvOnAir, setTVOnAir] = useState([]);
  useEffect(() => {
    props.setLoadingPage(true);

    Promise.all([
      TVService.getTVByType('popular').then((res) => {
        setTVPopulars(res.results);
      }),

      TVService.getTVByType('top_rated').then((res) => {
        setTVTopRated(res.results);
      }),

      TVService.getTVByType('on_the_air').then((res) => {
        setTVOnAir(res.results);
      }),
    ]).finally(() => {
      props.setLoadingPage(false);
    });
  }, [props]);
  return (
    <Layout>
      <MovieSlider
        title="Popular"
        endpoint="/tv/popular"
        movies={tvPopulars}
        mediaType="tv"
      />
      <MovieSlider
        title="Top Rated"
        endpoint="/tv/top_rated"
        movies={tvTopRated}
        mediaType="tv"
      />
      <MovieSlider
        title="On Air"
        endpoint="/tv/on_the_air"
        movies={tvOnAir}
        mediaType="tv"
      />
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(TV);
