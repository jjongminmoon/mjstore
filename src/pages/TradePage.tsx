import styled from "@emotion/styled";
import PageCarousel from "../components/TradePage/PageCarousel";
import ItemList from "../components/TradePage/ItemList";
import LoadingPage from "../components/Common/LoadingPage";
import { useEffect, useState } from "react";
import { flex_column, PageContainer } from "../components/Common/commonStyled";

interface CategoryListProps {
  name: string;
  category: string;
}

const categoryList: CategoryListProps[] = [
  { name: "전체", category: "" },
  { name: "스니커즈", category: "shoes" },
  { name: "의류", category: "clothes" },
  { name: "패션잡화", category: "acc" },
  { name: "테크", category: "tech" },
];

export default function TradepPage() {
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <>
      <PageCarousel />
      <PageContainer>
        <Divider>
          <CategoryWrapper>
            <Title>카테고리</Title>
            <List>
              {categoryList.map((list) => (
                <Item
                  key={list.category}
                  onClick={() => {
                    setCategory(list.category);
                    setSelected(list.category);
                  }}
                  color={selected === list.category ? "black" : "#c0c0c0"}
                >
                  {list.name}
                </Item>
              ))}
            </List>
          </CategoryWrapper>
          <ItemList category={category} />
        </Divider>
      </PageContainer>
    </>
  );
}

const Divider = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;

  @media (max-width: 420px) {
    margin: 0;
  }
`;

const CategoryWrapper = styled.div`
  width: 20%;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 3px solid black;

  @media (max-width: 730px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

const List = styled.ul`
  ${flex_column}
  margin: 20px 0;
  padding: 0;
  gap: 10px;

  @media (max-width: 730px) {
    font-size: 12px;
  }
`;

const Item = styled.li<{ color: string }>`
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.color};
`;
