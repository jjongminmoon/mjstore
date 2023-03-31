import styled from "@emotion/styled";
import NewSlide from "../components/MainPage/NewSlide";
import ManiaSlide from "../components/MainPage/ManiaSlide";
import Carousel from "../components/MainPage/Carousel";
import LoadingPage from "../components/Common/LoadingPage";
import { useEffect, useState } from "react";
import { flex_align, flex_column, PageContainer } from "../components/Common/commonStyled";
import { MdSwipeRight } from "react-icons/md";

export default function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Carousel />
          <PageContainer>
            <Wrapper>
              <TitleWrapper>
                <h1>신규 발매</h1>
                <SwipeIcon />
              </TitleWrapper>
              <NewSlide />
            </Wrapper>
            <Wrapper>
              <TitleWrapper>
                <h1>Jordan & Nike 매니아</h1>
                <SwipeIcon />
              </TitleWrapper>
              <ManiaSlide />
            </Wrapper>
          </PageContainer>
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  ${flex_column}
  justify-content: left;
  margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
  ${flex_align}
  gap: 20px;
`;

const SwipeIcon = styled(MdSwipeRight)`
  font-size: 25px;
  padding-top: 3px;
`;
