import styled from "@emotion/styled";
import CartAndUser from "./CartAndUser";
import Search from "./Search";
import Tabs from "./Tabs";
import { Link } from "react-router-dom";
import { flex_align } from "../Common/commonStyled";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Wrapper>
          <Link to={"/"}>
            <Logo>Mout_</Logo>
          </Link>
          <Tabs />
        </Wrapper>
        <Wrapper>
          <Search />
          <CartAndUser />
        </Wrapper>
      </Container>
    </Nav>
  );
}

const Nav = styled.section`
  position: fixed;
  background-color: black;
  width: 100%;
  z-index: 10;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 15px 115px 15px 120px;

  @media (max-width: 730px) {
    padding: 15px;
  }
`;

const Container = styled.section`
  ${flex_align}
  width: 100%;
  height: 60px;
  justify-content: space-between;
  z-index: 10;

  @media (min-width: 1280px) {
    max-width: 1360px;
    margin: auto;
  }
`;

const Wrapper = styled.div`
  ${flex_align}
`;

const Logo = styled.div`
  ${flex_align}
  width: 100%;
  font-size: 32px;
  justify-content: left;
  backgound-size: auto;
  font-weight: 900;
  color: white;
  margin-right: 20px;
`;
