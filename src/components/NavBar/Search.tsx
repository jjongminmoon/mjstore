import styled from "@emotion/styled";
import CommaFormat from "../Common/commaFormat";
import LoadingPage from "../Common/LoadingPage";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useQuery } from "react-query";
import { getProducsts, ProducstsProps } from "../Common/getProducsts";
import { Link } from "react-router-dom";
import { flex_align, flex_column, hover_gray } from "../Common/commonStyled";

export default function Search() {
  const { data, isLoading } = useQuery<ProducstsProps[]>("products", getProducsts);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownList, setDropDownList] = useState<ProducstsProps[] | undefined>(data);
  const [autoComplete, setAutoComplete] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const showDropDown = () => {
      if (searchValue === "") {
        setDropDownList([]);
      } else {
        const showList = data?.filter((item) => item.name_kr.includes(searchValue));
        setDropDownList(showList);
      }
    };
    showDropDown();
  }, [searchValue]);

  if (isLoading) {
    <LoadingPage />;
  }

  return (
    <>
      <Wrapper>
        <Input placeholder="제품명 등 검색" onClick={() => setAutoComplete(!autoComplete)} />
      </Wrapper>

      {autoComplete ? (
        <Container>
          <AutoCompleteWrapper>
            <AutoComplete>
              <Wrapper>
                <SearchInput
                  type="text"
                  onChange={handleChange}
                  value={searchValue}
                  placeholder="제품명 등 검색"
                />
              </Wrapper>
              <XIcon onClick={() => setAutoComplete(!autoComplete)} />
              <SearchCount>Total: {CommaFormat(Number(dropDownList?.length))}</SearchCount>
              <DropDownList>
                {dropDownList?.map((item) => (
                  <Link
                    to={`/trade/${item.id}`}
                    key={item.id}
                    onClick={() => setAutoComplete(false)}
                  >
                    <Items>
                      <Image src={item.image} alt={`${item.name_kr} 이미지`} />
                      <NameWrapper>
                        <KrName>{item.name_kr}</KrName>
                        <EnName>{item.name_en}</EnName>
                      </NameWrapper>
                    </Items>
                  </Link>
                ))}
              </DropDownList>
            </AutoComplete>
          </AutoCompleteWrapper>
        </Container>
      ) : null}

      <SearchIcon>
        <AiOutlineSearch onClick={() => setAutoComplete(!autoComplete)} />
      </SearchIcon>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 10px;
`;

const Input = styled.input`
  background-color: #333;
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  font-weight: bold;
  color: #57534e;

  ::placeholder {
    color: #a8a29e;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: #d6d3d1;
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 55px;

  font-weight: bold;
  color: #57534e;

  ::placeholder {
    color: #a8a29e;
  }
`;

const SearchIcon = styled.button`
  display: none;
  width: 45px;
  height: 45px;
  font-size: 25px;
  background-color: transparent;
  border: 0;
  padding-top: 5px;
  color: #57534e;

  ${hover_gray}

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    padding: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const AutoCompleteWrapper = styled.div`
  position: realtive;
  height: 80%;
  padding: 40px 40px 60px;
  background-color: white;
`;

const AutoComplete = styled.div`
  width: 40%;
  height: 100%;
  margin: auto;

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const XIcon = styled(AiOutlineClose)`
  position: absolute;
  font-size: 50px;
  top: 40px;
  right: 40px;
  cursor: pointer;

  ${hover_gray}

  @media (max-width: 730px) {
    font-size: 20px;
    top: 58px;
    right: 10px;
  }
`;

const SearchCount = styled.p`
  padding: 10px 0;
  font-size: 12px;
`;

const DropDownList = styled.div`
  height: 85%;
  border-top: 1px solid #eee;
  overflow-y: auto;
`;

const Items = styled.div`
  ${flex_align}
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const Image = styled.img`
  width: 10%;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const NameWrapper = styled.div`
  ${flex_column}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const KrName = styled.p`
  width: 100%;
  font-size: 14px;
`;

const EnName = styled.p`
  width: 100%;
  color: #999;
  font-size: 11px;
`;
