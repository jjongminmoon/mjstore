import styled from "@emotion/styled";
import priceFormat from "../Common/commaFormat";
import Loading from "../Common/LoadingPage";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProducsts, ProducstsProps } from "../Common/getProducsts";

interface Props {
  category: string;
}

export default function ItemList({ category }: Props) {
  const { data, isLoading } = useQuery<ProducstsProps[]>("products", getProducsts, {
    staleTime: 60000,
    cacheTime: Infinity,
  });

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {category.length > 0
        ? data
            ?.filter((item) => item.category === category)
            .map((item) => (
              <Link to={`/trade/${item.id}`} key={item.id}>
                <Image src={item.image} alt={`${item.name_kr} 이미지`} />
                <Brand>{item.brand}</Brand>
                <Name>{item.name_kr}</Name>
                <Price>{priceFormat(item.price)}원</Price>
              </Link>
            ))
        : data?.map((item) => (
            <Link to={`/trade/${item.id}`} key={item.id}>
              <Image src={item.image} alt={`${item.name_kr} 이미지`} />
              <Brand>{item.brand}</Brand>
              <Name>{item.name_kr}</Name>
              <Price>{priceFormat(item.price)}원</Price>
            </Link>
          ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 100%;

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 7px;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  background-color: #f5f5f5;
`;

const Brand = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const Name = styled.p`
  width: 100%;
  height: 35px;
  font-size: 13px;
  color: #767676;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;
