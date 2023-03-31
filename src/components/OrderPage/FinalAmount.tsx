import styled from "@emotion/styled";
import CommaFormat from "../Common/commaFormat";
import { useContext } from "react";
import { UserCartContext } from "../../store/CartProvider";
import { flex_align, flex_column } from "../Common/commonStyled";

interface FinalAmountProps {
  delivery: number;
}

export default function FinalAmount({ delivery }: FinalAmountProps) {
  const userCart = useContext(UserCartContext);

  const totalPrice: any = userCart[0]?.reduce((total: any, item: any) => {
    return total + item.price;
  }, 0);

  const FinalAmount = totalPrice - totalPrice * 0.05 + delivery;

  return (
    <Wrapper>
      <Title>최종 주문 금액</Title>
      <Bill>
        <Item>
          상품 금액 :<Price>{CommaFormat(totalPrice)}</Price>원
        </Item>
        <Item>
          쿠폰 할인 : <Price>- {CommaFormat(totalPrice * 0.05)}</Price>원
        </Item>
        <Item>
          배송비 : <Price>+ {CommaFormat(delivery)}</Price>원
        </Item>
        <Divider />
        <FinalItem>
          최종 결제 금액 : <FinalPrice>{CommaFormat(FinalAmount)}</FinalPrice>원
        </FinalItem>
        <Point>
          {"("}
          {Math.floor(FinalAmount * 0.001)}P 적립예정
          {")"}
        </Point>
      </Bill>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex_column}
  gap: 10px;
  width: 50%;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Bill = styled.div`
  ${flex_column}
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100%;
  padding: 15px;
`;

const Item = styled.div`
  ${flex_align}
  font-size: 16px;
  margin: 0;
  color: #999;
`;

const Price = styled.p`
  font-size: 16px;
  margin: 0 10px 0 auto;
  color: #333;
`;

const Divider = styled.hr`
  margin-top: 20px;
  border: 1px dotted black;
  width: 100%;
  height: 0;
`;

const FinalItem = styled.div`
  ${flex_align}
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: auto 0 0 0;
`;

const FinalPrice = styled.p`
  font-size: 30px;
  margin: 0 10px 0 auto;
  color: #0083ff;
`;

const Point = styled.p`
  font-size: 15px;
  color: #333;
  margin: 5px 0 0 auto;
`;
