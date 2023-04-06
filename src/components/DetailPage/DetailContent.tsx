import styled from "@emotion/styled";
import DeliveryInfo from "./DeliveryInfo";
import ProductInfo from "./ProductInfo";
import Review from "../Review/Review";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { clothesSizeList, shoesSizeList } from "./SizeList";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../firebase";
import { useContext } from "react";
import { UserCartContext, UserDataIdContext } from "../../store/CartProvider";
import { AuthContext } from "@/store/AuthProvider";
import { FixedWindow, flex_align, flex_center, flex_column } from "../Common/commonStyled";

export default function DetailContent({ item }: any) {
  const userDataId = useContext(UserDataIdContext);
  const userCart = useContext(UserCartContext);
  const userInfo = useContext(AuthContext);
  const [sizeSelector, setSizeSelector] = useState(false);
  const [selectedSize, setSelectedSize] = useState("all");

  const cartInfo = { ...item, ...{ size: selectedSize } };

  const addToCart = () => {
    const docRef = doc(dbService, "user", userDataId);
    const sameItem = userCart[0]?.find((el: any) => el.id === cartInfo.id);
    const sameSize = userCart[0]?.find((el: any) => el.size === cartInfo.size);

    if (userInfo === null) {
      alert("장바구니는 회원만 이용가능합니다.");
      return;
    } else if (
      selectedSize === "all" &&
      (item.category === "clotehs" || item.category === "shoes")
    ) {
      alert("사이즈를 선택해주세요.");
      return userCart;
    } else if (sameItem && sameSize) {
      alert("이미 같은 상품이 있습니다.");
      return userCart;
    } else {
      updateDoc(docRef, {
        cart: arrayUnion(cartInfo),
      });
      alert("상품을 장바구니에 담았습니다.");
      setSelectedSize("all");
    }
  };

  return (
    <>
      <ProductWrapper>
        <Image src={item.image} alt={`${item.name_kr} 이미지`} />
        <RightWrapper>
          <ProductInfo item={item} />

          {/* 사이즈 박스 */}
          {item.category === "tech" || item.category === "acc" ? (
            <SizeBox>사이즈가 없습니다.</SizeBox>
          ) : (
            <SizeBox onClick={() => setSizeSelector(true)}>
              사이즈
              <IoMdArrowDropdown />
              <SelectedSize>{selectedSize}</SelectedSize>
            </SizeBox>
          )}

          {/* 사이즈 선택 팝업 */}
          {sizeSelector ? (
            item.category === "shoes" ? (
              <FixedWindow>
                <SizeSelector>
                  {shoesSizeList.map((item: any, index: any) => (
                    <Sizes
                      key={index}
                      onClick={() => {
                        setSizeSelector(false);
                        setSelectedSize(item);
                      }}
                    >
                      {item}
                    </Sizes>
                  ))}
                </SizeSelector>
              </FixedWindow>
            ) : item.category === "clothes" ? (
              <FixedWindow>
                <SizeSelector>
                  {clothesSizeList.map((item: any, index: any) => (
                    <Sizes
                      key={index}
                      onClick={() => {
                        setSizeSelector(false);
                        setSelectedSize(item);
                      }}
                    >
                      {item}
                    </Sizes>
                  ))}
                </SizeSelector>
              </FixedWindow>
            ) : null
          ) : null}

          <ButtonWrapper>
            <Buy>구매</Buy>
            <Cart onClick={addToCart}>장바구니</Cart>
          </ButtonWrapper>
          <DeliveryInfo />
        </RightWrapper>
      </ProductWrapper>
      <Review />
    </>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  background-color: #f5f5f5;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  ${flex_column}
  float: right;
  width: 100%;
  margin-left: 50px;

  @media (max-width: 680px) {
    margin: 20px 0 0 0;
  }
`;

const SizeBox = styled.div`
  ${flex_align}
  gap: 5px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
`;

const SelectedSize = styled.p`
  margin: 0 10px 0 auto;
`;

const SizeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 40%;
  height: 60%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

const Sizes = styled.button`
  ${flex_center}
  margin: auto;
  width: 90%;
  height: 80%;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 10px;

  &:hover {
    background-color: #eee;
  }

  &:focus {
    border: 1px solid #4ca2f3;
    color: #0083ff;
    background-color: #eef6ff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Buy = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #4ca2f3;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  border-radius: 10px;
`;

const Cart = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  border-radius: 10px;
`;
