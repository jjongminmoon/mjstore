import styled from "@emotion/styled";
import CommaFormat from "../Common/commaFormat";
import {
  CartEnName,
  CartImage,
  CartNameWrapper,
  CartNumber,
  CartPrice,
  flex_align,
  flex_column,
  ImageNameWrapper,
  Management,
  NoItem,
  Size,
} from "../Common/commonStyled";
import { useContext } from "react";
import { UserCartContext } from "../../store/CartProvider";

export default function OrderList() {
  const userCart = useContext(UserCartContext);

  return (
    <Container>
      {userCart[0]?.length > 0 ? (
        userCart[0]?.map((item: any, index: any) => (
          <Wrapper key={`${item.id} ${item.size}`}>
            <CartNumber>{index + 1}</CartNumber>
            <ImageNameWrapper>
              <CartImage src={item.image} alt={`${item.name_kr} 이미지`} />
              <CartNameWrapper>
                {item.name_kr}
                <CartEnName>{item.name_en}</CartEnName>
              </CartNameWrapper>
            </ImageNameWrapper>
            <Size>{item.size}</Size>
            <CartPrice>{CommaFormat(item.price)}원</CartPrice>
            <Management>-</Management>
          </Wrapper>
        ))
      ) : (
        <NoItem>주문할 상품이 없습니다.</NoItem>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${flex_column}
`;

const Wrapper = styled.div`
  ${flex_align}
  font-size: 13px;
  width: 100%;
  border: 1px solid #ddd;
  border-top: 0;

  @media (max-width: 580px) {
    font-size: 7px;
  }
`;
