import styled from "@emotion/styled";
import carousel1 from "@/assets/1.webp";
import carousel2 from "@/assets/2.webp";
import carousel3 from "@/assets/3.webp";
import carousel4 from "@/assets/4.webp";
import carousel5 from "@/assets/5.webp";
import carousel6 from "@/assets/6.webp";
import CarouselSlick from "./CarouselSlick";

export interface ListProps {
  name: string;
  image: string;
}

export const sliderList: ListProps[] = [
  {
    name: "캐러셀 첫번째 이미지",
    image: carousel1,
  },
  {
    name: "캐러셀 두번째 이미지",
    image: carousel2,
  },
  {
    name: "캐러셀 세번째 이미지",
    image: carousel3,
  },
  {
    name: "캐러셀 네번째 이미지",
    image: carousel4,
  },
  {
    name: "캐러셀 다섯번째 이미지",
    image: carousel5,
  },
  {
    name: "캐러셀 여섯번째 이미지",
    image: carousel6,
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
