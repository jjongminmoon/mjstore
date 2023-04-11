import styled from "@emotion/styled";
import SwiperSlick from "./SwiperSlick";
import CommaFormat from "../Common/commaFormat";
import Loading from "../Common/LoadingPage";
import { useQuery } from "react-query";
import { getProducsts, ProducstsProps } from "../Common/getProducsts";
import { Link } from "react-router-dom";
import { flex_justify } from "../Common/commonStyled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewSlide() {
  const { data, isLoading } = useQuery<ProducstsProps[]>("products", getProducsts);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SwiperSlick>
      {data
        ?.filter((item) => item.releaseDate.includes("202303"))
        .map((item) => (
          <Link to={`/trade/${item.id}`} key={item.id}>
            <Items>
              <Image src={item.image} alt={`${item.name_kr} 이미지`} />
              <Name>{item.name_kr}</Name>
              <Price>{CommaFormat(item.price)}원</Price>
            </Items>
          </Link>
        ))}
    </SwiperSlick>
  );
}

const Items = styled.div`
  ${flex_justify}
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Image = styled.img`
  ${flex_justify}
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  background-color: #f5f5f5;
`;

const Name = styled.p`
  display: flex;
  width: 100%;
  height: 52px;
  font-size: 14px;
  color: #767676;
  margin: 10px 0 0 0;
`;

const Price = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;
