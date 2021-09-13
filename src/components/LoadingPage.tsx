import React from 'react';
import Spinner from 'react-spinkit';

const LoadingPage = (props: any) => {
  const { show } = props;
  return (
    <div className="overlay-content" hidden={!show}>
      <div className="wrapper">
        <Spinner name="pacman" fadeIn="none" color="yellow" />
        <span className="message">Loading....</span>
      </div>
    </div>
  );
};

export default LoadingPage;
