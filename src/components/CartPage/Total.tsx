import styled from "@emotion/styled";
import CommaFormat from "../Common/commaFormat";
import { useContext } from "react";
import { UserCartContext } from "../../store/CartProvider";
import { flex_align } from "../Common/commonStyled";

export default function Total() {
  const userCart = useContext(UserCartContext);
  const totalPrice = userCart[0]?.reduce((total: any, item: any) => {
    return total + item.price;
  }, 0);

  return (
    <>
      <Wrapper>
        <TotalCount>총 상품 개수 : {userCart[0]?.length}</TotalCount>
        <TotalPrice>총 금액 : {CommaFormat(totalPrice)}원</TotalPrice>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  ${flex_align}
  margin-top: 10px;
`;

const TotalCount = styled.span`
  font-size: 16px;
`;

const TotalPrice = styled.span`
  font-size: 16px;
  margin-left: auto;
`;
