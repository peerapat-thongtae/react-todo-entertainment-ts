import Layout from 'components/Layout';
import MovieGrid from 'components/MovieGrid';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLoadingPage } from 'store/actions/loader';

const MovieList = (props: any) => {
  const { getMovies, title, mediaType } = props;
  const [movies, setMovies]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.setLoadingPage(true);
    const query = {
      page: 1,
    };
    getMovies(query).then((res: any) => {
      setMovies(res.results);
      props.setLoadingPage(false);
    });
  }, [getMovies, props]);

  const loadmoreMovie = async () => {
    props.setLoadingPage(true);
    setCurrentPage(currentPage + 1);
    // if (currentPage !== 1) {
    const result = await getMovies({ page: currentPage + 1 });
    setMovies([...movies, ...result.results]);
    props.setLoadingPage(false);
    // }
  };
  return (
    <Layout>
      <div className="m-5">
        <div className="flex justify-center mb-5">
          <h1 className="text-gray-900 text-2xl font-bold title-font font-medium mb-1">
            {title}
          </h1>
        </div>
        <MovieGrid
          movies={movies}
          page={currentPage}
          mediaType={mediaType || 'movie'}
        />
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

export default connect(null, { setLoadingPage })(MovieList);
