import styled from "@emotion/styled";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickProps {
  children: React.ReactNode;
}

export default function PageCarouselSlick({ children }: SlickProps) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Background />
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  padding: 90px 100px 20px; 100px;
  width: 100%;
  height: 200px;

  .slick-dots {
    bottom: -25px;
  }

  .slick-track {
    display: flex;
    gap: 30px;
  }

  @media (max-width: 720px) {
    padding: 90px 30px;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  background-color: black;
  left: 0;
`;
