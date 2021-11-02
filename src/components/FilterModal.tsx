import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import MovieService from 'services/MovieService';
import MovieHelper from 'utils/MovieHelper';
import { setCloseModalFilter } from 'store/actions/modal';
import { connect } from 'react-redux';
import TVService from 'services/TVService';

const FilterModal = (props: any) => {
  const { title, modal } = props;
  const search = MovieHelper.paramsToObject(props.location.search);
  const [genres, setGenres] = useState([]);
  const [queryFilter, setQueryFilter] = useState(search);
  const { mediaType } = modal;

  const getGenres = (type: string) => {
    if (type === 'movie') {
      MovieService.getGenres().then((res) => {
        setGenres(res.genres);
      });
    }
    if (type === 'tv') {
      TVService.getGenres().then((res) => {
        setGenres(res.genres);
      });
    }
  };
  useEffect(() => {
    Promise.all([getGenres(mediaType)]);
  }, [mediaType]);

  const splitToGenresArray = () => {
    const arr = queryFilter.with_genres
      ? queryFilter.with_genres.split(',')
      : [];
    const result: any[] = [];
    if (genres.length > 0)
      arr.forEach((element: any) => {
        result.push(genres.find(({ id }: any) => id.toString() === element));
      });

    return result;
  };
  const handleCloseModal = () => {
    props.setCloseModalFilter();
  };

  const handleSelectGenres = (selectedList: any, selectedItem: any) => {
    const with_genres = selectedList
      .map((genre: any) => {
        return genre.id;
      })
      .join(',');
    setQueryFilter({ ...queryFilter, with_genres });
  };

  const handleSubmitFilter = () => {
    props.history.push(
      `${props.location.pathname}?${MovieHelper.objectToQueryString(
        queryFilter
      )}`
    );
    return '';
  };
  return (
    <div className="overlay-content" hidden={!modal.open}>
      <div className="wrapper">
        <div className="w-full max-w-screen-lg mx-auto px-6">
          <div className="flex justify-center p-4 px-3 py-10">
            <div className="w-full ">
              <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                  {title || 'Filters'}
                </div>
                <hr />
                <div className="py-3 text-sm m-2">
                  {/* <div className="flex flex-col mb-4"> */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col mb-4">
                      <label
                        className="mb-2 text-gray-900"
                        htmlFor="release_date_from"
                      >
                        Release Date (From)
                      </label>
                      <input
                        className="border py-2 px-3 text-grey-800"
                        type="date"
                        name="release_date_from"
                        id="release_date_from"
                        defaultValue={queryFilter['primary_release_date.gte']}
                        onChange={(e) => {
                          setQueryFilter({
                            ...queryFilter,
                            'primary_release_date.gte': e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        className="mb-2 text-gray-900"
                        htmlFor="release_date_to"
                      >
                        Release Date (To)
                      </label>
                      <input
                        className="border py-2 px-3 text-grey-800"
                        type="date"
                        name="release_date_to"
                        id="release_date_to"
                        defaultValue={queryFilter['primary_release_date.lte']}
                        onChange={(e) => {
                          setQueryFilter({
                            ...queryFilter,
                            'primary_release_date.lte': e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 text-gray-900" htmlFor="genres">
                        Genres
                      </label>
                      <Multiselect
                        displayValue="name"
                        // onRemove={function noRefCheck() {}}
                        // onSearch={function noRefCheck() {}}
                        // onSelect={function noRefCheck() {}}
                        // selectedValues={[{ id: 53 }]}
                        selectedValues={splitToGenresArray()}
                        placeholder="Select Genres"
                        options={genres}
                        showArrow
                        onSelect={handleSelectGenres}
                        onRemove={handleSelectGenres}
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>

                <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                  <button
                    type="button"
                    className="hover:text-red-600 text-white bg-blue-500 font-bold py-2 px-4"
                    onClick={handleSubmitFilter}
                  >
                    Submit
                  </button>
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
  modal: state.modalFilter,
});

export default connect(mapStateToProps, { setCloseModalFilter })(
  withRouter(FilterModal)
);
