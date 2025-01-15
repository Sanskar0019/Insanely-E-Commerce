import React, { useState, useEffect } from 'react';

const HeroCarousel: React.FC = () => {
  const images = [
    'https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg',
    'https://hulaglobal.com/wp-content/uploads/2022/08/Hula-global-fashion-summer-guide.jpg',
    'https://solink.com/wp-content/uploads/2023/11/how-to-sell-retail-clothing.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-90 h-96 overflow-hidden rounded-3xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;