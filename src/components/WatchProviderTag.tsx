import React from 'react';
import { Link } from 'react-router-dom';

const WatchProviderTag = (props: any) => {
  return (
    <Link to={props.to}>
      <span
        className="inline-block rounded-full text-white 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100"
      >
        <img
          src={props.imagePath}
          width="35"
          height="35"
          alt="Netflix"
          className="rounded-full"
        />
      </span>
    </Link>
  );
};

export default WatchProviderTag;
