import styled from "@emotion/styled";
import { addDoc, collection, getCountFromServer } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { dbService, loginGoogle } from "../../firebase";
import { FixedWindow, flex_center } from "../Common/commonStyled";

interface JoinMethodProps {
  setJoinMethod: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JoinMethod({ setJoinMethod }: JoinMethodProps) {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginGoogle().then(async (result) => {
      const user = result.user;

      const coll = collection(dbService, "user");
      const snapshot = await getCountFromServer(coll);

      await addDoc(coll, {
        number: snapshot.data().count + 1,
        email: user.email,
        cart: [],
      });

      navigate("/");
    });
  };

  return (
    <FixedWindow>
      <JoinMethodWrapper>
        <Wrapper>
          <Join onClick={() => navigate("/user/join")}>이메일로 회원가입</Join>
          <Join onClick={handleGoogleLogin}>
            <GoogleIcon />
            구글로 회원가입
          </Join>
          <GoBack onClick={() => setJoinMethod(false)}>돌아가기</GoBack>
        </Wrapper>
      </JoinMethodWrapper>
    </FixedWindow>
  );
}

const JoinMethodWrapper = styled.div`
  position: realtive;
  width: 50%;
  height: 50%;
  padding: 40px 40px 60px;
  background-color: white;

  @media (max-width: 580px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  ${flex_center}
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const Join = styled.button`
  ${flex_center}
  border: 0;
  border-radius: 8px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 60px;
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 30px;
  margin-right: 10px;
`;

const GoBack = styled.button`
  width: 100px;
  border: 0;
  border-radius: 8px;
  height: 30px;
`;
