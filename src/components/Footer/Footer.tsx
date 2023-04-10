import styled from "@emotion/styled";
import { SiKakaotalk } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <FooterBar>
        <Items>회사소개</Items>
        <Items>페널티 정책</Items>
        <Items>검수기준</Items>
        <Items>이용약관</Items>
        <Items>개인정보처리방침</Items>
      </FooterBar>
      <Container>
        <Wrapper>
          <HalfWrapper>
            <Company>
              {"("}주{")"} 엠스엘디티
            </Company>
            <CompanyInfo>
              <Info>주식회사 엠스엘디티</Info>
              <Info>대표: 서구보</Info>
              <Info>사업자 등록번호: 113-86-XXXXX</Info>
              <Info>통신판매업신고: 제2021-서울성동-XXXXX호</Info>
            </CompanyInfo>
            <Address>
              <Info>사업장 소재지: 서울특별시 성동구 아차산로9길 12 1층 마우트 오피스</Info>
              <Info>드랍존: 서울특별시 성동구 아차산로 126 지하 2층</Info>
              <Info>쇼룸 매장: 서울특별시 성동구 아차산로 9길 12 2층</Info>
              <Info>호스팅 서비스: 마이크로소프트사</Info>
            </Address>
            <Noted>
              주식회사 엠스엘디티는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별판매자가
              등록한 상품정보에 대해서 책임지지 않습니다.
            </Noted>
            <Noted>단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.</Noted>
            <Noted>
              당사는 고객님의 안전거래를 위해 관련 법률에 의거하여 NHN KCP의 에크로서비스를 적용하고
              있습니다.
            </Noted>
          </HalfWrapper>
          <HalfWrapper>
            <CS>고객센터</CS>
            <Info>
              평일 09:00 ~ 18:00 {"("}주말,공휴일 휴무{")"}
            </Info>
            <Info>점심 12:00 ~ 13:00</Info>
            <KakaoIcon />
          </HalfWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

const FooterBar = styled.div`
  display: flex;
  padding: 10px 120px;
  gap: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  @media (max-width: 730px) {
    padding: 0 20px;
    gap: 20px;
    font-size: 8px;
  }

  @media (max-width: 870px) {
    font-size: 11px;
  }
`;

const Items = styled.p`
  cursor: pointer;
`;

const Container = styled.section`
  width: 100%;
  padding: 20px 120px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

const HalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  widht: 100%;
`;

const Company = styled.p`
  color: #333;
  margin: 15px 0;
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 20px;
  color: #666;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 30px 0;
  gap: 5px;
`;

const Info = styled.p`
  font-size: 12px;
  color: #666;
`;

const Noted = styled.p`
  font-size: 12px;
  color: #bbb;
`;

const CS = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
`;

const KakaoIcon = styled(SiKakaotalk)`
  font-size: 30px;
  color: #f1d900;
  cursor: pointer;
  margin-top: 20px;
`;
