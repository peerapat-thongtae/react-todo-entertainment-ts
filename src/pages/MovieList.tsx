import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonFilter from 'components/ButtonFilter';
import DropdownSort from 'components/DropdownSort';
import Layout from 'components/Layout';
import Loading from 'components/Loading';
import MovieGrid from 'components/MovieGrid';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setLoadingPage } from 'store/actions/loader';

const MovieList = (props: any) => {
  const { getMovies, title, mediaType, sortShow, filterShow } = props;
  const [movies, setMovies]: any = useState([]);
  const [count, setCount]: any = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = {
      page: 1,
    };
    getMovies(query).then((res: any) => {
      setMovies(res.results);
      setCount(res.count);
      setLoading(false);
    });
  }, [getMovies]);

  const loadmoreMovie = async () => {
    setLoadingButton(true);
    setCurrentPage(currentPage + 1);
    // if (currentPage !== 1) {
    const result = await getMovies({ page: currentPage + 1 });
    setMovies([...movies, ...result.results]);
    setLoadingButton(false);
    // }
  };
  return (
    <Layout>
      <div className="m-5">
        <div className="flex font-bold mb-6">
          <div className="w-1/2 h-12 ml-10">
            {title} {count && `(${count})`}
          </div>
          <div className="w-1/2 h-12 mr-10 text-right">
            <div className="inline-block mr-4">
              <DropdownSort sortShow={sortShow} />
            </div>
            <div className="inline-block">
              <ButtonFilter filterShow={filterShow} mediaType={mediaType} />
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <MovieGrid
              movies={movies}
              page={currentPage}
              mediaType={mediaType || 'movie'}
              count={count}
            />
            <div className="flex justify-center mt-5">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={loadmoreMovie}
                disabled={loadingButton}
              >
                {loadingButton ? (
                  <FontAwesomeIcon icon={faSpinner} />
                ) : (
                  'Load more.... '
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default connect(null, { setLoadingPage })(MovieList);
