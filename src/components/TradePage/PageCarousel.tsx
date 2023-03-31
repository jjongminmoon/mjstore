import styled from "@emotion/styled";
import PageCarouselSlick from "./PageCarouselSlick";

interface ListProps {
  name: string;
  image: string;
}

const sliderList: ListProps[] = [
  {
    name: "캐러셀 첫번째 이미지",
    image: "src/assets/p-1.png",
  },
  {
    name: "캐러셀 두번째 이미지",
    image: "src/assets/p-2.png",
  },
  {
    name: "캐러셀 세번째 이미지",
    image: "src/assets/p-3.png",
  },
  {
    name: "캐러셀 네번째 이미지",
    image: "src/assets/p-4.png",
  },
  {
    name: "캐러셀 다섯번째 이미지",
    image: "src/assets/p-5.png",
  },
  {
    name: "캐러셀 여섯번째 이미지",
    image: "src/assets/p-6.png",
  },
];

export default function PageCarousel() {
  return (
    <PageCarouselSlick>
      {sliderList.map((item) => (
        <Slide key={item.image}>
          <Image src={item.image} alt={item.name} />
        </Slide>
      ))}
    </PageCarouselSlick>
  );
}

const Slide = styled.div`
  height: 100%;

  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
`;
