import { ReactNode } from "react";
import Slider from "react-slick";

type SliderProps = {
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  initialSlide?: number;
  slidesToShow1024?: number;
  slidesToScroll1024?: number;
  infinite1024?: boolean;
  dots1024?: boolean;
  slidesToShow600?: number;
  slidesToScroll600?: number;
  initialSlide600?: number;
  slidesToShow400?: number;
  slidesToScroll400?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  arrows?: boolean;
  children?: ReactNode;
};

function SliderV({
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  slidesToShow1024 = 3,
  slidesToScroll1024 = 3,
  infinite1024 = true,
  dots1024 = true,
  slidesToShow600 = 2,
  slidesToScroll600 = 2,
  initialSlide600 = 2,
  slidesToShow400 = 1,
  slidesToScroll400 = 1,
  autoplay = false,
  autoplaySpeed = 0,
  pauseOnHover = false,
  vertical = false,
  verticalSwiping = false,
  swipeToSlide = false,
  arrows = true,
  children,
}: SliderProps) {
  const settings = {
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: initialSlide,
    autoplay,
    autoplaySpeed,
    pauseOnHover,
    vertical,
    verticalSwiping,
    arrows,
    swipeToSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow1024,
          slidesToScroll: slidesToScroll1024,
          infinite: infinite1024,
          dots: dots1024,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow600,
          slidesToScroll: slidesToScroll600,
          initialSlide: initialSlide600,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow400,
          slidesToScroll: slidesToScroll400,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default SliderV;
