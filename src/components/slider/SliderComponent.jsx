import React, { useRef } from "react";
import styles from "./SliderComponent.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideProducts } from "../../constants/slideProducts";
import click from "../../assets/click.png";

const SliderComponent = () => {
  const arrowRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.nextClick}
        onClick={() => arrowRef.current.slickNext()}
      >
        <img src={click} alt="click" />
      </button>
      <Slider ref={arrowRef} {...settings}>
        {slideProducts.map((item) => (
          <div className={styles.card}>
            <div className={styles.product}>
              <img src={item.img} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className={styles.prevClick}
        onClick={() => arrowRef.current.slickPrev()}
      >
        <img src={click} alt="click" />
      </button>
    </div>
  );
};

export default SliderComponent;
