import styled from "@emotion/styled";
import { FcShipped, FcShop } from "react-icons/fc";
import { flex_align, flex_column } from "../Common/commonStyled";

export default function DeliveryInfo() {
  return (
    <DeliveryWrapper>
      <Delivery>
        <DeliveryIcon />
        일반 배송 : 3,000원
      </Delivery>
      <Delivery>
        <CenterIcon />
        센터 보관 : 첫 90일까지 무료
      </Delivery>
    </DeliveryWrapper>
  );
}

const DeliveryWrapper = styled.div`
  ${flex_column}
  gap: 10px;
  margin-top: 60px;
`;

const Delivery = styled.div`
  ${flex_align}
  gap: 10px;
  font-size: 13px;
  font-weight: bold;
  color: #333;
`;

const DeliveryIcon = styled(FcShipped)`
  font-size: 30px;
`;

const CenterIcon = styled(FcShop)`
  font-size: 30px;
`;
