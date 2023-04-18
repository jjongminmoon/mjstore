import styled from "@emotion/styled";
import LoadingPage from "../components/Common/LoadingPage";
import { useState } from "react";
import { flex_align, flex_center, flex_column } from "@/components/Common/commonStyled";
import { useQuery } from "react-query";
import { getProducsts, url } from "@/components/Common/getProducsts";
import axios from "axios";

export default function AdminPage() {
  const { data, isLoading } = useQuery("products", getProducsts);
  const lastId = Number(data?.length) + 1;
  const [contents, setContents] = useState<any>({
    id: null || "",
    brand: "",
    name_kr: "",
    name_en: "",
    price: null || "",
    category: "",
    releaseDate: "",
    modelNumber: "",
    image: "",
  });

  const handleContents = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setContents({
      ...contents,
      [name]: value,
    });
  };

  const { id, brand, name_kr, name_en, price, category, releaseDate, modelNumber, image } =
    contents;

  const brandList = [...new Set(data?.map((item: any) => item.brand))];
  const categoryList = [...new Set(data?.map((item: any) => item.category))];

  const onPost = (e: React.FormEvent) => {
    e.preventDefault;
    axios
      .post(url, contents)
      .then(() => {
        alert("상품이 업로드 되었습니다.");
      })
      .catch((e) => {
        alert(e);
      });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log(data);

  return (
    <Container>
      <Title>상품 추가</Title>
      <Form onSubmit={onPost}>
        <Wrapper>
          <Box>
            <Name>ID</Name>
            <Input name="id" onChange={handleContents} value={id} placeholder={`${lastId}`} />
          </Box>
          <Box>
            <Name>브랜드</Name>
            <SelectBox name="brand" onChange={handleContents} value={brand}>
              <Option value={""}>브랜드 선택</Option>
              {brandList.map((list: any, index) => (
                <Option key={index} value={list}>
                  {list}
                </Option>
              ))}
            </SelectBox>
          </Box>
          <Box>
            <Name>상품명(한글)</Name>
            <Input name="name_kr" onChange={handleContents} value={name_kr} />
          </Box>
          <Box>
            <Name>상풍명(영문)</Name>
            <Input name="name_en" onChange={handleContents} value={name_en} />
          </Box>
          <Box>
            <Name>가격</Name>
            <Input name="price" onChange={handleContents} value={price} />
          </Box>
          <Box>
            <Name>카테고리</Name>
            <SelectBox name="category" onChange={handleContents} value={category}>
              <Option value={""}>카테고리 선택</Option>
              {categoryList.map((list: any, index) => (
                <Option key={index} value={list}>
                  {list}
                </Option>
              ))}
            </SelectBox>
          </Box>
          <Box>
            <Name>출시일</Name>
            <Input name="releaseDate" onChange={handleContents} value={releaseDate} />
          </Box>
          <Box>
            <Name>모델 넘버</Name>
            <Input name="modelNumber" onChange={handleContents} value={modelNumber} />
          </Box>
          <Box>
            <Name>이미지 URL</Name>
            <Input name="image" onChange={handleContents} value={image} />
          </Box>
        </Wrapper>
        <Button type="submit">상품 업로드</Button>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  ${flex_align}
  flex-direction: column;
  width: 100%;
  margin-top: 90px;
  padding: 40px 120px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  ${flex_center}
  flex-direction: column;
  gap: 8px;
  width: 80%;
  height: 100%;
`;

const Wrapper = styled.div`
  ${flex_column}
  gap: 15px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Name = styled.p`
  ${flex_center}
  width: 40%;

  @media (max-width: 730px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ddd;
  padding: 5px;
`;

const SelectBox = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ddd;
  padding: 5px;
`;

const Option = styled.option`
  font-size @media (max-width: 730px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  ${flex_center}
  width: 120px;
  height: 30px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
`;
