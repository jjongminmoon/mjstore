import styled from "@emotion/styled";
import nikeShoes from "@/assets/nikeShoes.png";
import fiftyPercent from "@/assets/15percent.png";
import sevenPercent from "@/assets/7percent.png";
import lot from "@/assets/꽝.png";
import RafflelSlick from "./RaffleSlick";

export interface ListProps {
  name: string;
  image: string;
}

export const sliderList: ListProps[] = [
  {
    name: "나이키 덩크 로우 LX 블루 스웨이드",
    image: nikeShoes,
  },
  {
    name: "15% 할인쿠폰",
    image: fiftyPercent,
  },
  {
    name: "7% 할인쿠폰",
    image: sevenPercent,
  },
  {
    name: "꽝",
    image: lot,
  },
];

export default function RaffleSlide() {
  return (
    <RafflelSlick>
      {sliderList.map((item) => (
        <Slide key={item.image}>
          <Image src={item.image} alt={item.name} />
        </Slide>
      ))}
    </RafflelSlick>
  );
}

const Slide = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
`;
