import Layout from 'components/Layout';
import MovieGrid from 'components/MovieGrid';
import React, { useEffect, useState } from 'react';
import MovieService from 'services/MovieService';

const MovieList = (props: any) => {
  const { getMovies } = props;
  const [movies, setMovies]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getMovies(1).then((res: any) => {
      setMovies(res.results);
    });
  }, [getMovies]);

  const loadmoreMovie = async () => {
    setCurrentPage(currentPage + 1);
    // if (currentPage !== 1) {
    const result = await MovieService.getMovieByType(
      'top_rated',
      currentPage + 1
    );
    setMovies([...movies, ...result.results]);
    // }
  };
  return (
    <Layout>
      <div className="m-5">
        <MovieGrid movies={movies} />
        <div className="flex justify-center mt-5">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={loadmoreMovie}
          >
            Load more...
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MovieList;
