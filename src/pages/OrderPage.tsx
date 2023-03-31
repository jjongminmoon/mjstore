import styled from "@emotion/styled";
import Header from "../components/CartPage/Header";
import LoadingPage from "../components/Common/LoadingPage";
import OrderInfo from "../components/OrderPage/OrderInfo";
import OrderList from "../components/OrderPage/OrderList";
import DeliveryInfo from "../components/OrderPage/DeliveryInfo";
import { useEffect, useState } from "react";
import { flex_center, flex_column } from "@/components/Common/commonStyled";

export default function OrderPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <Wrapper>
            <Title>주문 정보</Title>
            <Header />
            <OrderList />
            <OrderInfo />
            <DeliveryInfo />
          </Wrapper>
          <PaymentButton>결제하기</PaymentButton>
        </Container>
      )}
    </>
  );
}

const Container = styled.section`
  width: 100%;
  margin-top: 90px;
  padding: 40px 120px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

const Wrapper = styled.div`
  ${flex_column}
  width: 100%;
`;

const Title = styled.p`
  font-size: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
`;

const PaymentButton = styled.div`
  ${flex_center}
  width: 100%;
  height: 50px;
  margin-top: 30px;
  background-color: #4ca2f3;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;
