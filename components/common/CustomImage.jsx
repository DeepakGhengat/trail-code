/* eslint-disable react/prop-types */
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

const CustomImage = ({ src, alt, width, height, className }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const url = useMemo(() => {
    if (error) {
      return '/images/default-image.jpg';
    }

    return src;
  }, [error]);

  return (
    <Image
      alt={alt}
      className={`${
        error ? 'object-top' : ''
      }${className} aspect-video w-full object-cover`}
      height={height}
      onError={handleError}
      quality={100}
      src={url}
      width={width}
    />
  );
};

export default CustomImage;
