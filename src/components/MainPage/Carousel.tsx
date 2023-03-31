import styled from "@emotion/styled";
import CarouselSlick from "./CarouselSlick";

export interface ListProps {
  name: string;
  image: string;
}

export const sliderList: ListProps[] = [
  {
    name: "캐러셀 첫번째 이미지",
    image: "src/assets/1.png",
  },
  {
    name: "캐러셀 두번째 이미지",
    image: "src/assets/2.png",
  },
  {
    name: "캐러셀 세번째 이미지",
    image: "src/assets/3.png",
  },
  {
    name: "캐러셀 네번째 이미지",
    image: "src/assets/4.png",
  },
  {
    name: "캐러셀 다섯번째 이미지",
    image: "src/assets/5.png",
  },
  {
    name: "캐러셀 여섯번째 이미지",
    image: "src/assets/6.png",
  },
];

export default function Carousel() {
  return (
    <CarouselSlick>
      {sliderList.map((item) => (
        <Slide key={item.image}>
          <Image src={item.image} alt={item.name} />
        </Slide>
      ))}
    </CarouselSlick>
  );
}

const Slide = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
`;
