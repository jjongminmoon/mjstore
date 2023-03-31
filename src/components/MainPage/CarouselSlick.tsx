import styled from "@emotion/styled";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickProps {
  children: React.ReactNode;
}

export default function CarouselSlick({ children }: SlickProps) {
  const settings = {
    arrows: false,
    dots: true,
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
  padding: 90px 110px 20px; 110px;
  width: 100%;
  height: 100%;

  .slick-dots {
    bottom: -25px;
  }

  .slick-track {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }

  @media (max-width: 730px) {
    padding: 90px 20px 0 20px
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  background-color: black;
  left: 0;
`;
