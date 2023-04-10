import LoadingPage from "@/components/Common/LoadingPage";
import TrendInput from "@/components/TrendPage/TrendInput";
import TrendList from "@/components/TrendPage/TrendList";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FcRightUp } from "react-icons/fc";
import { box_shadow, flex_align } from "@/components/Common/commonStyled";

export default function TrendPage() {
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <Title>
            <TrendIcon />
            What's the Trend now?
            <Button onClick={() => setPopup(true)}>보여주기</Button>
            {popup ? <TrendInput setPopup={setPopup} /> : null}
          </Title>
          <TrendList />
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

const Title = styled.div`
  ${flex_align}
  font-size: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;

  @media (max-width: 580px) {
    font-size: 18px;
  }
`;

const TrendIcon = styled(FcRightUp)`
  font-size: 28px;
  margin-right: 10px;
  background-color: black;
`;

const Button = styled.button`
  border: 0;
  border-radius: 9999px;
  width: 70px;
  height: 70px;
  background-color: black;
  color: white;
  font-weight: bold;
  margin-left: 30px;
  ${box_shadow}
`;
