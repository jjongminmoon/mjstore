import styled from "@emotion/styled";
import commaFormat from "../Common/commaFormat";
import { flex_column } from "../Common/commonStyled";

export default function ProductInfo({ item }: any) {
  return (
    <ProductsInfo>
      <Brand>{item.brand}</Brand>
      <KrName>{item.name_kr}</KrName>
      <EnName>{item.name_en}</EnName>
      <Price>{commaFormat(item.price)}원</Price>
    </ProductsInfo>
  );
}

const ProductsInfo = styled.div`
  ${flex_column}
  gap: 5px;
  width: 100%;
`;

const Brand = styled.p`
  font-weight: bold;
`;

const KrName = styled.p`
  height: auto;
  font-size: 20px;
  font-weight: bold;
`;

const EnName = styled.p`
  font-size: 13px;
  color: #999;
  margin: 5px 0 0 0;
`;

const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0 0 0;
`;
