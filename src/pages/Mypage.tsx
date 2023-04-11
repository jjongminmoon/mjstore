import styled from "@emotion/styled";
import ProfileChange from "../components/User/ProfileChange";
import { AuthContext } from "../store/AuthProvider";
import { useContext } from "react";
import { flex_align, flex_column } from "@/components/Common/commonStyled";

export default function Mypage() {
  const userInfo: any | string = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <List>로그인 정보</List>
        <Divider />
        <ListWrapper>
          <Item>
            UID<Content>{userInfo?.uid}</Content>
          </Item>
          <Item>
            이메일<Content>{userInfo?.email}</Content>
          </Item>
          <Item>
            이메일 인증 여부
            <Content>{userInfo?.emailVerified ? "인증 완료" : "미인증"}</Content>
          </Item>
        </ListWrapper>
      </Wrapper>
      <Wrapper>
        <List>프로필 정보</List>
        <Divider />
        <ProfileChange />
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin-top: 90px;
  padding: 40px 200px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }

  @media (max-width: 580px) {
    font-size: 10px;
  }
`;

const Wrapper = styled.div`
  ${flex_column}
  margin: 80px 0;
`;

const List = styled.div`
  font-size: 24px;
`;

const Divider = styled.hr`
  width: 100%;
  border: 1px solid black;
  margin: 5px 0 0 0;
`;

const ListWrapper = styled.div`
  ${flex_column}
`;

const Item = styled.div`
  ${flex_align}
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
`;

const Content = styled.div`
  ${flex_align}
  width: 70%;
  margin-left: auto;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
