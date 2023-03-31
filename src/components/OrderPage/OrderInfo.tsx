import styled from "@emotion/styled";
import CheckedDelivery from "./CheckedDelivery";
import FinalAmount from "./FinalAmount";
import { useState } from "react";

export default function OrderInfo() {
  const [delivery, setDelivery] = useState(0);

  return (
    <Container>
      <CheckedDelivery setDelivery={setDelivery} />
      <FinalAmount delivery={delivery} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
