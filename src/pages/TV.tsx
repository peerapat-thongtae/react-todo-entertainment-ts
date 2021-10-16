import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TVService from 'services/TVService';
import { setLoadingPage } from '../store/actions/loader';

const TV = (props: any) => {
  const [tvPopulars, setTVPopulars] = useState([]);
  const [tvTopRated, setTVTopRated] = useState([]);
  useEffect(() => {
    props.setLoadingPage(true);
    TVService.getTVByType('popular').then((res) => {
      setTVPopulars(res.results);
    });

    TVService.getTVByType('top_rated').then((res) => {
      setTVTopRated(res.results);
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
        type="/tv/top_rated"
        movies={tvTopRated}
        mediaType="tv"
      />
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(TV);
