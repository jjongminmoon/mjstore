import styled from "@emotion/styled";
import JoinMethod from "../components/LoginPage/JoinMethod";
import LoadingPage from "../components/Common/LoadingPage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, loginGoogle } from "../firebase";
import { flex_center, flex_column, flex_justify } from "@/components/Common/commonStyled";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [joinMethod, setJoinMethod] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleGoogleLogin = async () => {
    await loginGoogle();

    navigate("/");
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <Wrapper>
            <Title>Mout_</Title>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="이메일"
                type="text"
                onChange={handleEmail}
                value={email}
                autoComplete="off"
              />
              <Input
                placeholder="비밀번호"
                type="password"
                onChange={handlePassword}
                value={password}
                autoComplete="off"
              />
              <Login>로그인</Login>
            </form>
            <Management>
              <Join onClick={() => setJoinMethod(true)}>회원가입</Join>
              {joinMethod ? <JoinMethod setJoinMethod={setJoinMethod} /> : null}
              <Divider />
              <FindPwd>비밀번호 찾기</FindPwd>
            </Management>
            <GoogleLogin onClick={handleGoogleLogin}>
              <GoogleIcon />
              구글 간편 로그인
            </GoogleLogin>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

const Container = styled.section`
  ${flex_justify}
  width: 100%;
  margin-top: 90px;
  padding: 40px 120px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

const Wrapper = styled.div`
  ${flex_column}
  width: 45%;
  height: 100%;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const Title = styled.p`
  ${flex_justify}
  font-size: 50px;
  font-weight: bold;
  margin: 30px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border: 0;
  border-radius: 8px;

  ::placeholder {
    font-weight: bold;
  }
`;

const Login = styled.button`
  ${flex_center}
  border: 0;
  border-radius: 8px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 60px;
  margin-top: 10px;
`;

const Management = styled.div`
  ${flex_center}
  margin-top: 10px;
`;

const Join = styled.p`
  font-size: 14px;
  cursor: pointer;
`;

const Divider = styled.hr`
  margin: 2px 30px;
  border: 1px solid #ddd;
  backgound-color: #ddd;
`;

const FindPwd = styled.p`
  font-size: 14px;
`;

const GoogleLogin = styled.button`
  ${flex_center}
  border: 0;
  border-radius: 8px;
  background-color: #ccc;
  font-size: 15px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 60px;
  margin: 10px 0 40px 0;
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 30px;
  margin-right: 10px;
`;
