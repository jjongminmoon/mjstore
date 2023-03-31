import styled from "@emotion/styled";
import LoadingPage from "../Common/LoadingPage";
import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthProvider";
import { flex_align, flex_column } from "../Common/commonStyled";

export default function ProfileChange() {
  const navigate = useNavigate();
  const userInfo: any | string = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [changedNickname, setChangedNickname] = useState("");
  const [changedAddress, setChangedAddress] = useState("");
  const [popupNickname, setPopupNickname] = useState(false);
  const [popupAddress, setPopupAddress] = useState(false);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChangedNickname(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChangedAddress(e.target.value);
  };

  const changeNickName = () => {
    updateProfile(userInfo, {
      displayName: changedNickname,
    })
      .then(() => {
        alert("닉네임 변경완료");
        navigate("/user/mypage");
        setPopupNickname(false);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const changeAddress = () => {
    updateProfile(userInfo, {
      photoURL: changedAddress,
    })
      .then(() => {
        alert("주소 변경완료");
        navigate("/user/mypage");
        setPopupAddress(false);
      })
      .catch((e) => {
        alert(e);
      });
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <ListWrapper>
          <Item>
            닉네임
            <PopupButton type="button" onClick={() => setPopupNickname(!popupNickname)}>
              변경
            </PopupButton>
            {popupNickname ? (
              <PopupWrapper>
                <PopupInput type="text" onChange={handleNickname} value={changedNickname} />
                <PopupChangeButton type="button" onClick={changeNickName}>
                  변경
                </PopupChangeButton>
              </PopupWrapper>
            ) : null}
            <Content>
              {userInfo?.displayName === null ? "닉네임을 설정해주세요." : userInfo?.displayName}
            </Content>
          </Item>
          <Item>
            주소
            <PopupButton type="button" onClick={() => setPopupAddress(!popupAddress)}>
              변경
            </PopupButton>
            {popupAddress ? (
              <PopupWrapper>
                <PopupInput type="text" onChange={handleAddress} value={changedAddress} />
                <PopupChangeButton type="button" onClick={changeAddress}>
                  변경
                </PopupChangeButton>
              </PopupWrapper>
            ) : null}
            <Content>
              {userInfo?.photoURL === null ? "주소를 입력해주세요" : userInfo?.photoURL}
            </Content>
          </Item>
        </ListWrapper>
      )}
    </>
  );
}

const ListWrapper = styled.div`
  ${flex_column}
`;

const Item = styled.div`
  ${flex_align}
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: bold;
`;

const Content = styled.div`
  ${flex_align}
  width: 70%;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PopupButton = styled.button`
  width: 50px;
  height: 30px;
  border: 0;
  background-color: black;
  color: white;
  border-radius: 8px;
  margin-left: auto;
`;

const PopupWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
`;

const PopupInput = styled.input`
  width: 500px;
  height: 30px;
  border: 1px solid #ccc;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const PopupChangeButton = styled.button`
  width: 50px;
  height: 30px;
  border: 0;
  background-color: black;
  color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
