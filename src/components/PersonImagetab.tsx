/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import MovieHelper from 'utils/MovieHelper';
import ImageCustom from './ImageCustom';

const PersonImageTab = (props: any) => {
  const { images } = props;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const imageLinks = images && images.map((image: any) => {
    return MovieHelper.originalImagePath(image.file_path);
  });
  return (
    <section id="top_movies" className="clearfix">
      <div className="wrapper">

        <div className="grid grid-cols-6 gap-8 row">
          {images &&
            images.map((image: any, index: number) => {
              return (
                <div key={index} className="post">
                  <div className=" mb-2">
                    <ImageCustom
                      src={MovieHelper.originalImagePath(image.file_path)}
                      onClick={() => {
                        setIsOpen(true);
                        setPhotoIndex(index);
                      }}
                    />

                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={imageLinks[photoIndex]}
              nextSrc={imageLinks[(photoIndex + 1) % imageLinks.length]}
              prevSrc={
                imageLinks[(photoIndex + imageLinks.length - 1)
                % imageLinks.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + imageLinks.length - 1) % imageLinks.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % imageLinks.length)
              }
            />
          )}
        </div>
      </div>

    </section>
  );
};

export default PersonImageTab;
