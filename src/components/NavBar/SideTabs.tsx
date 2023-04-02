import styled from "@emotion/styled";
import { useState } from "react";
import { tabList } from "./Tabs";
import { Link } from "react-router-dom";
import { flex_center, hover_gray } from "../Common/commonStyled";
import { GiHamburgerMenu } from "react-icons/gi";
import { flex_column } from "../Common/commonStyled";
import { AiOutlineClose } from "react-icons/ai";

export default function SideTabs() {
  const [selected, setSelected] = useState("");
  const [popup, setPopup] = useState(false);

  return (
    <>
      <HambergerIcon onClick={() => setPopup(true)} />
      {popup ? (
        <FixedWindow>
          <SideBarWrapper>
            <XIcon onClick={() => setPopup(false)} />
            <Wrapper>
              {tabList.map((tab) => (
                <Item
                  key={tab.pathname}
                  onClick={() => {
                    setSelected(tab.name);
                    setPopup(false);
                  }}
                  color={selected === tab.name ? "white" : "#57534e"}
                  textDecoration={selected === tab.name ? "underline" : ""}
                >
                  <Link to={tab.pathname}>{tab.name}</Link>
                </Item>
              ))}
            </Wrapper>
          </SideBarWrapper>
        </FixedWindow>
      ) : null}
    </>
  );
}

const HambergerIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 25px;
  color: #57534e;
  margin-right: 20px;

  ${hover_gray}

  @media (max-width: 1020px) {
    display: flex;
  }
`;

const FixedWindow = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const SideBarWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: black;
  overflow-y: auto;
`;

const XIcon = styled(AiOutlineClose)`
  position: absolute;
  color: white;
  font-size: 25px;
  top: 20px;
  right: 20px;
  cursor: pointer;

  ${hover_gray}
`;

const Wrapper = styled.ul`
  ${flex_column}
  padding: 0 10px;
  margin-top: 40px;
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
