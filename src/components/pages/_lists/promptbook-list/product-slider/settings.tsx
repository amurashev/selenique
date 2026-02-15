
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  lazyLoad: true,
  speed: 300,
  centerMode: false,
  slidesToShow: 3.3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      arrows: true,
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1,
      },
    },
    {
      arrows: false,
      breakpoint: 600,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      },
    },
    {
      arrows: false,
      breakpoint: 480,
      settings: {
        slidesToShow: 1.85,
        slidesToScroll: 2,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any

export default settings