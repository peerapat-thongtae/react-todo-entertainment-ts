import React from 'react';
import { Link } from 'react-router-dom';

const WatchProviderTag = () => {
  return (
    <Link to="/">
      <span
        className="inline-block rounded-full text-white 
                  bg-red-500 hover:bg-gray-500 duration-300 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100"
      >
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        ssss
      </span>
    </Link>
  );
};

export default WatchProviderTag;
