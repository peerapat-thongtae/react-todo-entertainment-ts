import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';

const VideoTab = (props: any) => {
  const videos = props.videos || [];
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="gallery">
          <div className="row">
            <div className="pic post">
              <div className="card__lightbox poster">
                <div className="backdrop">
                  <img src={MovieHelper.posterPath('')} className="lazyload" />
                </div>
                <h6 className="cast_name">ssss</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTab;
