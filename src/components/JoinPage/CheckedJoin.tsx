import styled from "@emotion/styled";
import { AiFillNotification } from "react-icons/ai";
import { flex_align } from "../Common/commonStyled";

interface CheckedJoinProps {
  setIsChecked1: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked1: boolean;
  setIsChecked2: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked2: boolean;
}

export default function CheckedJoin(props: CheckedJoinProps) {
  return (
    <>
      <Noted>
        <AiFillNotification />
        회원가입 후 마이페이지에서 홈페이지 이용을 위한 정보수정이 필요합니다.
      </Noted>
      <CheckedWrapper>
        <Checked
          type="checkbox"
          onClick={() => {
            props.setIsChecked1(!props.isChecked1);
          }}
        />
        <CheckedContent>
          {"["}필수{"]"} 만 14세 이상입니다.
        </CheckedContent>
      </CheckedWrapper>
      <CheckedWrapper>
        <Checked
          type="checkbox"
          onClick={() => {
            props.setIsChecked2(!props.isChecked2);
          }}
        />
        <CheckedContent>
          {"["}필수{"]"} 마우트 이용약관 및 개인정보 수집 및 이용에 동의합니다.
        </CheckedContent>
      </CheckedWrapper>
    </>
  );
}

const CheckedWrapper = styled.div`
  ${flex_align}
  margin-top: 10px;
`;

const Noted = styled.p`
  ${flex_align}
  gap: 5px;
  font-size: 12px;
`;

const Checked = styled.input`
  border-radisu: 8px;
`;

const CheckedContent = styled.label`
  font-size: 13px;
  color: #999;
`;
