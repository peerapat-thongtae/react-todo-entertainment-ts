import React from 'react';
import { Link } from 'react-router-dom';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import MovieCard from './MovieCard';
import '@brainhubeu/react-carousel/lib/style.css';

const MovieSlider = (props: any) => {
  const { title, movies, endpoint, mediaType } = props;
  const listMovies = movies.map((movie: any, index: number) => (
    <MovieCard key={index} movie={movie} mediaType={mediaType} />
  ));
  return (
    <>
      <div className="mb-12">
        <div className="flex font-bold ">
          <div className="w-1/2 h-12 ml-10">{title}</div>
          <div className="w-1/2 h-12 mr-10 text-right">
            <Link to={endpoint} className="hover:text-orange-500">
              Show All
            </Link>
          </div>
        </div>
        <div>
          <Carousel
            draggable={false}
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4,
                },
              },
            ]}
          >
            {listMovies}
          </Carousel>
        </div>
      </div>
      <hr className="mb-10" />
    </>
  );
};

export default MovieSlider;
