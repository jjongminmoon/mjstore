import styled from "@emotion/styled";
import { useState } from "react";
import { FixedWindow, flex_column, flex_justify } from "../Common/commonStyled";

interface DeliveryInfoInputsProps {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setDeliveryInfo: React.Dispatch<React.SetStateAction<any>>;
}

export default function DeliveryInfoInputs(props: DeliveryInfoInputsProps) {
  const [inputs, setInputs] = useState({
    deliveryName: "",
    recipient: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { deliveryName, recipient, phoneNumber, address } = inputs;

  return (
    <>
      {props.popup ? (
        <FixedWindow>
          <InputWrapper>
            <SaveButton
              onClick={() => {
                props.setDeliveryInfo(inputs);
                alert("배송 정보가 저장되었습니다.");
                props.setPopup(false);
              }}
            >
              저장
            </SaveButton>
            <Item>
              배송지명
              <Input name="deliveryName" onChange={handleInputs} value={deliveryName} />
            </Item>
            <Item>
              수령인
              <Input name="recipient" onChange={handleInputs} value={recipient} />
            </Item>
            <Item>
              수령인 전화번호
              <Input name="phoneNumber" onChange={handleInputs} value={phoneNumber} />
            </Item>
            <Item>
              배송지 주소
              <Input name="address" onChange={handleInputs} value={address} />
            </Item>
          </InputWrapper>
        </FixedWindow>
      ) : null}
    </>
  );
}

const InputWrapper = styled.div`
  position: realtive;
  width: 50%;
  height: 55%;
  padding: 30px;
  background-color: white;
  overflow-y: auto;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

const SaveButton = styled.div`
  ${flex_justify}
  width: 50px;
  height: 25px;
  margin: 0 0 20px auto;
  background-color: black;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const Item = styled.div`
  ${flex_column}
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;
  height: 30px;
  background-color: #f5f5f5;
  border: 0;
  border-radius: 8px;

  ::placeholder {
    font-weight: bold;
  }
`;
