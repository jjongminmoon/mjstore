import styled from "@emotion/styled";
import nikeShoes from "@/assets/nikeShoes.webp";
import fiftyPercent from "@/assets/15percent.webp";
import sevenPercent from "@/assets/7percent.webp";
import lot from "@/assets/꽝.webp";
import LoadingPage from "@/components/Common/LoadingPage";
import RaffleSlide from "@/components/RafflePage/RaffleSlide";
import { FixedWindow, flex_center, flex_justify } from "@/components/Common/commonStyled";
import { useEffect, useState } from "react";
import { GiClick } from "react-icons/gi";

export default function RafflePage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>([]);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    drawRaffle();
  }, [draw]);

  const drawRaffle = () => {
    const random = Math.floor(Math.random() * 99 + 1);
    const prize: any[] = [
      {
        name: "나이키 덩크 로우 LX 블루 스웨이드",
        image: nikeShoes,
      },
      {
        name: "15% 할인쿠폰",
        image: fiftyPercent,
      },
      {
        name: "7% 할인쿠폰",
        image: sevenPercent,
      },
      {
        name: "꽝",
        image: lot,
      },
    ];
    const pbt = [2, 15, 40];

    if (random > pbt[2]) {
      setResult(prize[3]);
    } else if (random > pbt[1] && random <= pbt[2]) {
      setResult(prize[2]);
    } else if (random > pbt[0] && random <= pbt[1]) {
      setResult(prize[1]);
    } else if (random <= pbt[0]) {
      setResult(prize[0]);
    }
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <Title>이달의 Raffle</Title>
          <SlideWrapper>
            <RaffleSlide />
          </SlideWrapper>
          <ButtonWrapper>
            <DrawButton
              onClick={() => {
                drawRaffle;
                setDraw(true);
              }}
            >
              <ClickIcon />
            </DrawButton>
          </ButtonWrapper>
          {draw ? (
            <FixedWindow>
              <Wrapper>
                <ResultWrapper key={result.image}>
                  <ResultImage src={result.image} />
                  <ResultName>{result.name}</ResultName>
                  <Exit onClick={() => setDraw(false)}>확인</Exit>
                </ResultWrapper>
              </Wrapper>
            </FixedWindow>
          ) : null}
        </Container>
      )}
    </>
  );
}

const Container = styled.section`
  width: 100%;
  min-height: 500px;
  margin-top: 120px;
  margin-bottom: 30px;
  padding: 40px;
  background-color: black;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

const Title = styled.p`
  ${flex_justify}
  font-size: 30px;
  color: white;
`;

const SlideWrapper = styled.div`
  ${flex_justify}
`;

const ButtonWrapper = styled.div`
  ${flex_justify}
  margin-top: 50px;
`;

const DrawButton = styled.button`
  ${flex_center}
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  background-color: white;
  border: 3px solid blue;
`;

const ClickIcon = styled(GiClick)`
  font-size: 30px;
`;

const Wrapper = styled.div`
  position: relative;
  ${flex_center}
  width: 50%;
  height: 50%;
  padding: 20px;
  background-color: white;
  overflow-y: auto;
  border-radius: 999999px;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

const ResultWrapper = styled.div`
  ${flex_center}
  flex-direction: column;
`;

const ResultImage = styled.img`
  width: 70%;
  margin-top: 20px;
`;
const ResultName = styled.p`
  font-size: 20px;
`;

const Exit = styled.button`
  width: 30%;
  height: 40px;
  background-color: black;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: 0;
  border-radius: 10px;
  margin-top: 20px;
`;
