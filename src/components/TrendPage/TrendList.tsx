import styled from "@emotion/styled";
import { dbService } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { flex_center, flex_column, flex_justify, hover_gray } from "../Common/commonStyled";

export default function TrendList() {
  const [trendData, setTrendData] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(dbService, "trend"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTrendData(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Wrapper>
      {trendData.map((item: any) => (
        <Item key={item.createdAt}>
          <Image src={item.image} alt={`${item.nickname}님 트렌드 이미지`} />
          <Card>
            <Nickname>{item.nickname} 님</Nickname>
            <p>{item.title}</p>
          </Card>
          <TimeStamp>{item.createdAt}</TimeStamp>
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 7px;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
  }
`;

const Item = styled.div`
  ${flex_column}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.3);
    border-radius: 8px;
  }
`;

const Card = styled.div`
  ${flex_center}
  flex-direction: column;
  background-color: black;
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Nickname = styled.p`
  ${flex_center}
  gap: 5px;
  font-size: 15px;
`;

const TimeStamp = styled.div`
  margin: 0 auto;
  font-size: 12px;
  color: #ccc;
`;

const Delete = styled.p`
  ${flex_justify}
  width: 30px;
  cursor: pointer;
  ${hover_gray}
`;
