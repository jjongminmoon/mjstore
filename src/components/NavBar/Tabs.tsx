import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { flex_center, hover_gray } from "../Common/commonStyled";

const tabList = [
  { name: "Trade", pathname: "/trade" },
  { name: "Trend", pathname: "/trend" },
  { name: "Raffle", pathname: "/raffle" },
];

export default function Tabs() {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <Wrapper>
        {tabList.map((tab) => (
          <Item
            key={tab.pathname}
            onClick={() => setSelected(tab.name)}
            color={selected === tab.name ? "white" : "#57534e"}
            textDecoration={selected === tab.name ? "underline" : ""}
          >
            <Link to={tab.pathname}>{tab.name}</Link>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: none;
  width: 100%;

  @media (max-width: 1020px) {
    display: none;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  padding: 0 10px;
  mirgin: 0;
  gap: 0.5rem;
`;

const Item = styled.li<{ color: string; textDecoration: string }>`
  ${flex_center}
  width: 80px;
  height: 40px;
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-underline-offset: 10px;
  cursor: pointer;

  ${hover_gray}
`;
