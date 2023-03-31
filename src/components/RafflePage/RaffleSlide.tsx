import styled from "@emotion/styled";
import { flex_justify } from "../Common/commonStyled";
import RafflelSlick from "./RaffleSlick";

export interface ListProps {
  name: string;
  image: string;
}

export const sliderList: ListProps[] = [
  {
    name: "나이키 덩크 로우 LX 블루 스웨이드",
    image: "src/assets/nikeShoes.png",
  },
  {
    name: "15% 할인쿠폰",
    image: "src/assets/15percent.png",
  },
  {
    name: "7% 할인쿠폰",
    image: "src/assets/7percent.png",
  },
  {
    name: "꽝",
    image: "src/assets/꽝.png",
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
