import React, { useState } from 'react';
import LoadIcon from './LoadIcon';

const ImageCustom = (props: any) => {
  const [loadImage, setLoadImage] = useState(true);
  const { src, onClick, className } = props;
  return (
    <>
      {loadImage && (
        <div className="flex justify-center aligns-center">
          <LoadIcon />
        </div>
      )}
      <img
        src={src}
        className={`cursor-pointer ${className}`}
        onLoad={() => setLoadImage(false)}
        onClick={onClick}
      />
    </>
  );
};

export default ImageCustom;
