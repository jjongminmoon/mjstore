import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { BiLogInCircle, BiUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { box_shadow, Button, flex_column, flex_justify, hover_gray } from "../Common/commonStyled";
import { AuthContext } from "../../store/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { UserCartContext } from "../../store/CartProvider";

export default function CartAndUser() {
  const navigate = useNavigate();
  const [userMenu, setUserMenu] = useState(false);
  const userCart = useContext(UserCartContext);
  const userInfo = useContext(AuthContext);
  const cartCount = userCart[0]?.length;

  const handleLogout = () => {
    signOut(auth);
    alert("정상적으로 로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <Wrapper>
      <Link to={"/trade/cart"}>
        <Button>
          <BsHandbagFill />
          {cartCount > 0 ? <CartCount>{cartCount}</CartCount> : null}
        </Button>
      </Link>
      <Button>
        {userInfo !== null ? (
          <>
            <BiUserIcon onClick={() => setUserMenu(!userMenu)} />
            {userMenu ? (
              <UserMenu>
                <Menu>
                  <Exit onClick={() => setUserMenu(false)} />
                  <UserName>{userInfo?.displayName} 님</UserName>
                  <Item
                    onClick={() => {
                      navigate("/user/mypage");
                      setUserMenu(false);
                    }}
                  >
                    마이페이지
                  </Item>
                  <Item onClick={handleLogout}>로그아웃</Item>
                </Menu>
              </UserMenu>
            ) : null}
          </>
        ) : (
          <Link to={"/user/login"}>
            <BiLogInCircleIcon />
          </Link>
        )}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const BiUserIcon = styled(BiUser)`
  font-size: 35px;
`;

const UserMenu = styled.div`
  position: absolute;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  right: -33px;
  top: 50px;
  width: 200px;
  height: 150px;
  z-index: 10;
  border: 1px solid #ddd;
  ${box_shadow}
`;

const Menu = styled.div`
  ${flex_column}
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;

const Exit = styled(AiOutlineClose)`
  margin-left: auto;

  ${hover_gray}
`;

const UserName = styled.p`
  font-size: 15px;
  color: black;
  padding: 10px;
  margin: 10px 0 10px 0;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
`;

const Item = styled.div`
  ${flex_justify}
  margin-bottom: 5px;

  ${hover_gray}
`;

const BiLogInCircleIcon = styled(BiLogInCircle)`
  font-size: 35px;
`;

const CartCount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  font-size: 18px;
  border-radius: 9999px;
  background-color: red;
  color: white;
`;
