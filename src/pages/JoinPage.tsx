import styled from "@emotion/styled";
import CheckedJoin from "../components/JoinPage/CheckedJoin";
import JoinInput from "../components/JoinPage/JoinInput";
import LoadingPage from "../components/Common/LoadingPage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, dbService } from "../firebase";
import { addDoc, collection, getCountFromServer } from "firebase/firestore";
import { flex_center, flex_column, flex_justify } from "@/components/Common/commonStyled";

export default function JoinPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState(false);

  const handledCheckedPassword = () => {
    if (password === rePassword) {
      alert("비밀번호가 일치합니다. 회원가입을 진행해주세요.");
      setCheckedPassword(true);
    } else {
      alert("비밀번호를 다시 확인해주세요.");
      return setPassword(""), setRePassword("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const coll = collection(dbService, "user");
    const snapshot = await getCountFromServer(coll);

    if (checkedPassword === true) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("회원가입 완료");
          navigate("/user/login");
        })
        .catch((e) => {
          alert(e);
        });
    }

    await addDoc(coll, {
      number: snapshot.data().count + 1,
      email: email,
      cart: [],
    });
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
            <Title>회원가입</Title>
            <form onSubmit={handleSubmit}>
              <JoinInput
                email={email}
                password={password}
                rePassword={rePassword}
                setEmail={setEmail}
                setPassword={setPassword}
                setRePassword={setRePassword}
              />
              <CheckedPassword type="button" onClick={handledCheckedPassword}>
                비밀번호 확인
              </CheckedPassword>
              <CheckedJoin
                setIsChecked1={setIsChecked1}
                isChecked1={isChecked1}
                setIsChecked2={setIsChecked2}
                isChecked2={isChecked2}
              />
              {checkedPassword && isChecked1 && isChecked2 === true ? (
                <Join backgroundColor={"black"}>동의하고 가입하기</Join>
              ) : (
                <Join backgroundColor={"#ccc"} disabled>
                  동의하고 가입하기
                </Join>
              )}
            </form>
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
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0;
`;

const CheckedPassword = styled.button`
  border: 0;
  border-radius: 5px;
  margin: 5px 0 10px 0;
  background-color: black;
  color: white;
`;

const Join = styled.button<{ backgroundColor: string }>`
  ${flex_center}
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 15px;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 60px;
  margin: 30px 0 40px 0;
`;
