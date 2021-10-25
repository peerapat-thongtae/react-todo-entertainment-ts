/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import MovieHelper from 'utils/MovieHelper';
import ImageLightBox from './ImageLightBox';

const PersonImageTab = (props: any) => {
  const { images } = props;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const imageLinks = images.map((image: any) => {
    return MovieHelper.posterPath(image.file_path);
  });
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">

        <div className="grid grid-cols-6 gap-8 row">
          {images &&
            images.map((image: any, index: number) => {
              return (
                <div key={index} className="post">
                  <div className="card__img mb-2">
                    <img
                      src={MovieHelper.posterPath(image.file_path)}
                      className="lazyload"
                      onClick={() => {
                        setIsOpen(true);
                        setPhotoIndex(0);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        {isOpen &&
          <ImageLightBox images={imageLinks} open={isOpen} index={photoIndex} />
        }
      </div>

    </section>
  );
};

export default PersonImageTab;
