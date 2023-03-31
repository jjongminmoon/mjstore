import styled from "@emotion/styled";
import DeliveryInfoInputs from "./DeliveryInfoInputs";
import { useState } from "react";
import { flex_align, flex_column, flex_justify } from "../Common/commonStyled";

export default function DeliveryInfo() {
  const [popup, setPopup] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState<any>([]);

  return (
    <Container>
      <Title>배송지 정보</Title>
      <AddButton onClick={() => setPopup(true)}>입력</AddButton>
      {deliveryInfo.length === 0 ? (
        <p>배송지 정보가 없습니다.</p>
      ) : (
        <DeliveryInfoWrapper>
          <DeliveryName>{deliveryInfo.deliveryName}</DeliveryName>
          <InfoItem>{deliveryInfo.address}</InfoItem>
          <Flex>
            <InfoItem>{deliveryInfo.recipient}</InfoItem>
            <Divider />
            <InfoItem>{deliveryInfo.phoneNumber}</InfoItem>
          </Flex>
        </DeliveryInfoWrapper>
      )}
      <DeliveryInfoInputs popup={popup} setPopup={setPopup} setDeliveryInfo={setDeliveryInfo} />
    </Container>
  );
}

const Container = styled.div`
  ${flex_column}
  margin-top: 40px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
  margin: 0 0 20px 0;
  border-bottom: 1px solid black;
`;

const AddButton = styled.div`
  ${flex_justify}
  width: 50px;
  height: 25px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const DeliveryInfoWrapper = styled.div`
  border-bottom: 1px solid #ddd;
`;

const DeliveryName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const Flex = styled.div`
  ${flex_align}
  gap: 10px;
  margin: 5px 0 20px 0;
`;

const InfoItem = styled.p`
  font-size: 14px;
`;

const Divider = styled.hr`
  border: 1px solid #ddd;
  margin: 5px 0;
`;
