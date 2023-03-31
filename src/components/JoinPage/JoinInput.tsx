import styled from "@emotion/styled";

interface JoinInputProps {
  email: string;
  password: string;
  rePassword: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setRePassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function JoinInput(props: JoinInputProps) {
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const type = e.target.name;
    if (type === "password") {
      props.setPassword(e.target.value);
    } else if (type === "rePassword") {
      props.setRePassword(e.target.value);
    }
  };

  return (
    <>
      <Item>이메일</Item>
      <Input placeholder="이메일 입력" type="text" onChange={handleEmail} value={props.email} />
      <Item>비밀번호</Item>
      <Input
        placeholder="비밀번호 입력(6~20자리)"
        type="password"
        name="password"
        onChange={handlePassword}
        value={props.password}
        autoComplete="off"
      />
      <Input
        placeholder="비밀번호 재입력"
        type="password"
        name="rePassword"
        onChange={handlePassword}
        value={props.rePassword}
        autoComplete="off"
      />
    </>
  );
}

const Item = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 5px;
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
