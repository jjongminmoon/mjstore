import styled from "@emotion/styled";
import { MoonLoader } from "react-spinners";
import { flex_center } from "./commonStyled";

export default function LoadingPage() {
  return (
    <Wrapper>
      <MoonLoader color="#000000" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  ${flex_center}
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
