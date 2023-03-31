import styled from "@emotion/styled";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickProps {
  children: React.ReactNode;
}

export default function SwiperSlick({ children }: SlickProps) {
  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1870,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Slider {...settings}>{children}</Slider>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  .slick-track {
    display: flex;
    gap: 10px;
  }

  .slick-slide img {
    display: flex;
  }
`;
