import ButtonFilter from 'components/ButtonFilter';
import DropdownSort from 'components/DropdownSort';
import Layout from 'components/Layout';
import MovieGrid from 'components/MovieGrid';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLoadingPage } from 'store/actions/loader';

const MovieList = (props: any) => {
  const { getMovies, title, mediaType, sortShow, filterShow } = props;
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
        <div className="flex font-bold mb-6">
          <div className="w-1/2 h-12 ml-10">{title}</div>
          <div className="w-1/2 h-12 mr-10 text-right">
            <div className="inline-block mr-4">
              <DropdownSort sortShow={sortShow} />
            </div>
            <div className="inline-block">
              <ButtonFilter filterShow={filterShow} mediaType={mediaType} />
            </div>
          </div>
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
