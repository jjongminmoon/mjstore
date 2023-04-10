import styled from "@emotion/styled";
import pageCarousel1 from "@/assets/p-1.webp";
import pageCarousel2 from "@/assets/p-2.webp";
import pageCarousel3 from "@/assets/p-3.webp";
import pageCarousel4 from "@/assets/p-4.webp";
import pageCarousel5 from "@/assets/p-5.webp";
import pageCarousel6 from "@/assets/p-6.webp";
import PageCarouselSlick from "./PageCarouselSlick";

interface ListProps {
  name: string;
  image: string;
}

const sliderList: ListProps[] = [
  {
    name: "캐러셀 첫번째 이미지",
    image: pageCarousel1,
  },
  {
    name: "캐러셀 두번째 이미지",
    image: pageCarousel2,
  },
  {
    name: "캐러셀 세번째 이미지",
    image: pageCarousel3,
  },
  {
    name: "캐러셀 네번째 이미지",
    image: pageCarousel4,
  },
  {
    name: "캐러셀 다섯번째 이미지",
    image: pageCarousel5,
  },
  {
    name: "캐러셀 여섯번째 이미지",
    image: pageCarousel6,
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
