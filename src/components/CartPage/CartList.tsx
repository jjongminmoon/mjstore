import styled from "@emotion/styled";
import CommaFormat from "../Common/commaFormat";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import {
  CartNumber,
  ImageNameWrapper,
  CartImage,
  CartNameWrapper,
  CartEnName,
  Size,
  CartPrice,
  Management,
  NoItem,
  flex_column,
  flex_align,
} from "../Common/commonStyled";
import { useContext } from "react";
import { UserCartContext, UserDataIdContext } from "../../store/CartProvider";
import { dbService } from "../../firebase";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

export default function CartList() {
  const navigate = useNavigate();
  const userCart = useContext(UserCartContext);
  const userCartId = useContext(UserDataIdContext);

  console.log(typeof userCart[0]);

  return (
    <Container>
      {userCart[0]?.length > 0 ? (
        userCart[0]?.map((item: any, index: any) => (
          <Wrapper key={`${item.id}/${item.size}`}>
            <CartNumber>{index + 1}</CartNumber>
            <ImageNameWrapper>
              <CartImage
                src={item.image}
                alt={`${item.name_kr} 이미지`}
                onClick={() => navigate(`/trade/${item.id}`)}
              />
              <CartNameWrapper onClick={() => navigate(`/trade/${item.id}`)}>
                {item.name_kr}
                <CartEnName>{item.name_en}</CartEnName>
              </CartNameWrapper>
            </ImageNameWrapper>
            <Size>{item.size}</Size>
            <CartPrice>{CommaFormat(item.price)}</CartPrice>
            <Management>
              <RemoveIcon
                onClick={() => {
                  const docRef = doc(dbService, "user", userCartId);
                  updateDoc(docRef, {
                    cart: arrayRemove(item),
                  });
                }}
              />
            </Management>
          </Wrapper>
        ))
      ) : (
        <NoItem>장바구니에 상품이 없습니다.</NoItem>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${flex_column}
`;

const Wrapper = styled.div`
  ${flex_align}
  font-size: 13px;
  width: 100%;
  border: 1px solid #ddd;
  border-top: 0;

  @media (max-width: 580px) {
    font-size: 7px;
  }
`;

const RemoveIcon = styled(AiFillDelete)`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
`;
