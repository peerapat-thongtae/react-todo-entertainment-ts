/* eslint-disable prettier/prettier */
import React from 'react';
import MovieHelper from 'utils/MovieHelper';
import 'react-image-lightbox/style.css';
import ImageCustom from './ImageCustom';
import 'react-modal-video/scss/modal-video.scss';

const VideoTab = (props: any) => {
  const { videos } = props;
  // const imageLinks = images && images.map((image: any) => {
  //   return MovieHelper.originalImagePath(image.file_path);
  // });
  return (
    <section id="" className="clearfix">
      <div className="wrapper">

        <div className="grid grid-cols-6 gap-8 row">
          {videos &&
            videos.map((video: any, index: number) => {
              return (
                <div key={index} className="post">
                  <div className="">
                    <ImageCustom
                      src={MovieHelper.youtubePath(video.key).thumbnail}
                      onClick={() => {
                        window.open(MovieHelper.youtubePath(video.key).url, '_blank');
                      }}
                    />
                    <h3 className="cast_name">{video.name}</h3>
                    <p className="post_info">{video.type}</p>

                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {/* {isOpen && (
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
          )} */}
        </div>
      </div>

    </section>
  );
};

export default VideoTab;
