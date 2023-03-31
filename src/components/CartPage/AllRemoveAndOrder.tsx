import styled from "@emotion/styled";
import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dbService } from "../../firebase";
import { UserCartContext, UserDataIdContext } from "../../store/CartProvider";
import { flex_align, flex_justify } from "../Common/commonStyled";

export default function AllRemoveAndOrder() {
  const navigate = useNavigate();
  const userCart = useContext(UserCartContext);
  const userCartId = useContext(UserDataIdContext);

  return (
    <Wrapper>
      <AllRemove
        onClick={() => {
          const docRef = doc(dbService, "user", userCartId);
          updateDoc(docRef, {
            cart: [],
          });
        }}
      >
        전체삭제
      </AllRemove>
      <Order
        onClick={() =>
          userCart[0]?.length > 0 ? navigate("/trade/order") : alert("주문할 상품이 없습니다.")
        }
      >
        주문하기
      </Order>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex_align}
  margin-top: 10px;
`;

const AllRemove = styled.button`
  ${flex_justify}
  width: 150px;
  padding: 10px;
  font-size: 18px;
  background-color: black;
  color: white;
  font-weight: bold;
  border: 0;
`;

const Order = styled.button`
  ${flex_justify}
  width: 150px;
  padding: 10px;
  font-size: 18px;
  background-color: #4ca2f3;
  color: white;
  font-weight: bold;
  margin-left: auto;
  border: 0;
`;
