import Layout from 'components/Layout';
import MovieSlider from 'components/MovieSlider';
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <MovieSlider
        title="Popular"
        type="popular"
        movies={[]}
        mediaType="movie"
      />
    </Layout>
  );
};

export default Home;
