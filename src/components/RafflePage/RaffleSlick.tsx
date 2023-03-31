import styled from "@emotion/styled";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickProps {
  children: React.ReactNode;
}

export default function RaffleSlick({ children }: SlickProps) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    useTrandsform: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
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
  padding: 20px 110px 20px; 110px;
  width: 80%;
  height: 100%;
  border: 3px solid black;
  border-radius: 50px;

  .slick-track {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }

  @media (max-width: 730px) {
    padding: 0 20px 0 20px
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  left: 0;
  border-radius: 50px;
`;
