import "./ImageSlider.css";
import { useState } from "react";
import slider1 from "../assets/foggy-mountains.jpg";
import slider2 from "../assets/hiker.jpg";
import slider3 from "../assets/landscape.jpg";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsRecordFill,
} from "react-icons/bs";

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slider1, slider2, slider3];
  const [activeDot, setActiveDot] = useState(currentIndex);
  const dots = Array.from({ length: images.length }, (_, index) => index);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setActiveDot(index);
  };

  return (
    <div className="slider__container">
      <BsChevronCompactLeft
        onClick={previousSlide}
        className="slider__btn slider__left"
        size={30}
      />
      <img
        src={images[currentIndex]}
        alt="slider image"
        className="slider__img"
      />
      <BsChevronCompactRight
        onClick={nextSlide}
        className="slider__btn slider__right"
        size={30}
      />
      <div className="dots">
        {dots.map((index) => (
          <BsRecordFill
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot ${index === activeDot ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
