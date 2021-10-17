import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { setOpenModalFilter } from 'store/actions/modal';

const ButtonFilter = (props: any) => {
  const filterShow = props.filterShow || false;
  const handleSearch = () => {
    props.setOpenModalFilter({});
  };
  return (
    filterShow && (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={handleSearch}
      >
        Filters <FontAwesomeIcon icon={faFilter} />
      </button>
    )
  );
};

export default connect(null, { setOpenModalFilter })(ButtonFilter);
