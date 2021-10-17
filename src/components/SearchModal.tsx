/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import MultiService from 'services/MultiService';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { setCloseModal } from '../store/actions/modal';
import Loading from './Loading';

const ListSearch = (props: any) => {
  return (
    <>
      {props.results.length > 0
        ? props.results.slice(0, 10).map((result: any, key: number) => (
          <Link to={`/${result.media_type}/${result.id}`} key={key}>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
              <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
              <div className="flex-grow font-medium px-2">
                {result.name || result.title || undefined}
              </div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                {result.media_type}
                {result.known_for_department &&
                  ` / ${result.known_for_department}`}
              </div>
            </div>
          </Link>
        ))
        : <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">No results</div>}
    </>
  );
};

const SearchModal = (props: any) => {
  const { title, modalSearchMulti } = props;
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const debounceSearch = useRef(
    _.debounce((searchTerm) => {
      MultiService.searchMulti(searchTerm).then((result) => {
        setResults(result.results);
        setIsSearching(false);
      });
    }, 1000)
  );
  const handleCloseModal = () => {
    props.setCloseModal();
    setResults([]);
  };

  useEffect(() => {
    setSearchText(modalSearchMulti.search);
  }, [modalSearchMulti.search]);

  useEffect(
    () => {
      if (searchText && searchText !== '') {
        setIsSearching(true);
        debounceSearch.current(searchText);
      } else {
        setResults([]);
      }
    },
    [modalSearchMulti.search, searchText] // Only call effect if debounced search term changes
  );
  return (
    <div className="overlay-content" hidden={!modalSearchMulti.open}>
      <div className="wrapper">
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="flex justify-center p-4 px-3 py-10">
            <div className="w-full max-w-md">
              <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                  {title || 'Search'}
                </div>
                <div className="flex items-center bg-gray-200 rounded-md">
                  <div className="pl-2">
                    <svg
                      className="fill-current text-gray-500 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                    id="search"
                    type="text"
                    placeholder="Search teams or members"
                    autoComplete="off"
                    defaultValue={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <div className="py-3 text-sm">
                  {isSearching === false ? (
                    <ListSearch results={results} />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                  <button
                    type="button"
                    className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  loader: state.loader,
  modalSearchMulti: state.modalSearchMulti,
});

export default connect(mapStateToProps, { setCloseModal })(SearchModal);
