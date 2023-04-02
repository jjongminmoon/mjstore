import styled from "@emotion/styled";
import { flex_align, flex_justify } from "../Common/commonStyled";

export default function CartHeader() {
  return (
    <Wrapper>
      <HeaderNumber>순번</HeaderNumber>
      <HeaderName>상품명</HeaderName>
      <HeaderSize>사이즈</HeaderSize>
      <HeaderPrice>금액</HeaderPrice>
      <HeaderManagement>주문 관리</HeaderManagement>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex_align}
  width: 100%;
  height: 50px;
  margin-top: 30px;
  border: 1px solid #ddd;
  font-size: 14px;

  @media (max-width: 580px) {
    font-size: 8px;
  }
`;

const HeaderNumber = styled.div`
  ${flex_justify}
  width: 5%;

  @media (max-width: 580px) {
    display: none;
  }
`;

const HeaderName = styled.div`
  ${flex_justify}
  width: 60%;
`;

const HeaderSize = styled.div`
  ${flex_justify}
  width: 10%;
`;

const HeaderPrice = styled.div`
  ${flex_justify}
  width: 15%;
`;

const HeaderManagement = styled.div`
  ${flex_justify}
  width: 10%;

  @media (max-width: 580px) {
    width: 15%;
  }
`;
