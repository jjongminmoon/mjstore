import styled from "@emotion/styled";
import { FcShipped, FcShop } from "react-icons/fc";
import { flex_align, flex_column } from "../Common/commonStyled";

interface CheckedDeliveryProps {
  setDelivery: React.Dispatch<React.SetStateAction<number>>;
}

export default function CheckedDelivery({ setDelivery }: CheckedDeliveryProps) {
  return (
    <Wrapper>
      <Title>배송 방법</Title>
      <Delivery
        onClick={() => {
          setDelivery(3000);
        }}
      >
        <DeliveryIcon />
        <p>일반 배송 : 3,000원</p>
      </Delivery>
      <Delivery
        onClick={() => {
          setDelivery(0);
        }}
      >
        <CenterIcon />
        <p>센터 보관 : 첫 90일까지 무료</p>
      </Delivery>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex_column}
  gap: 10px;
  width: 40%;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Delivery = styled.button`
  ${flex_align}
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  color: #333;
  padding: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:focus {
    border: 1px solid #4ca2f3;
    color: #0083ff;
    background-color: #eef6ff;
  }
`;

const DeliveryIcon = styled(FcShipped)`
  font-size: 30px;
`;

const CenterIcon = styled(FcShop)`
  font-size: 30px;
`;
