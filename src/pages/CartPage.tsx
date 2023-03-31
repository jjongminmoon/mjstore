import styled from "@emotion/styled";
import AllRemoveAndOrder from "../components/CartPage/AllRemoveAndOrder";
import CartList from "../components/CartPage/CartList";
import Header from "../components/CartPage/Header";
import Total from "../components/CartPage/Total";
import LoadingPage from "../components/Common/LoadingPage";
import { useEffect, useState } from "react";
import { flex_column } from "@/components/Common/commonStyled";

export default function Cart() {
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
            <Title>장바구니</Title>
            <Header />
            <CartList />
            <Total />
            <AllRemoveAndOrder />
          </Wrapper>
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
