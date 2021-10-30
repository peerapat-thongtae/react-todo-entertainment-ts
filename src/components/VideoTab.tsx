import React from 'react';
import { Link } from 'react-router-dom';
import MovieHelper from 'utils/MovieHelper';
import styled from 'styled-components';

// สร้าง Component ชื่อ Button โดยมันก็คือ <button> ที่มี style ตามที่เราเขียนลงไป
const Button = styled.button`
  background-color: white;
  color: blue;
  border: 2px solid blue;
`;
const VideoTab = (props: any) => {
  const videos = props.videos || [];
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">
        <div className="gallery">
          <div className="row">
            {videos &&
              videos.map((video: any, index: React.Key | undefined) => {
                return (
                  <div className="pic post" key={index}>
                    <div className="card__lightbox poster">
                      <div className="backdrop">
                        <img
                          src={MovieHelper.posterPath('')}
                          className="lazyload"
                        />
                      </div>
                      <h6 className="cast_name">ssss</h6>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTab;
