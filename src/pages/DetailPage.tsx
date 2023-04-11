import styled from "@emotion/styled";
import DetailContent from "../components/DetailPage/DetailContent";
import LoadingPage from "../components/Common/LoadingPage";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProducsts, ProducstsProps } from "../components/Common/getProducsts";

export default function DetailPage() {
  const { data, isLoading } = useQuery<ProducstsProps[]>("products", getProducsts, {
    staleTime: 60000,
    cacheTime: Infinity,
  });
  const { id } = useParams();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      {data
        ?.filter((item) => item.id === Number(id))
        .map((item: any) => (
          <DetailContent item={item} key={item.id} />
        ))}
    </Container>
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
