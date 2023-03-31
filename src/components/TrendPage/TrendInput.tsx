import styled from "@emotion/styled";
import { dbService } from "@/firebase";
import { AuthContext } from "@/store/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { useState, useContext } from "react";
import { FixedWindow, flex_center, flex_justify, hover_gray } from "../Common/commonStyled";
import { getToday } from "../Common/getToday";
import { AiOutlineClose } from "react-icons/ai";

interface TrendInputProps {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TrendInput({ setPopup }: TrendInputProps) {
  const userInfo = useContext(AuthContext);
  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState("");

  const saveImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null);
        resolve();
      };
    });
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo === null) {
      alert("트렌드 페이지의 글 작성은 회원만 이용 가능합니다.");
      return;
    } else if (userInfo.displayName === null) {
      alert("트렌드 페이지의 글 작성을 위해 닉네임을 먼저 정해주세요.");
      return;
    } else if (title === "") {
      alert("제목은 필수 입력사항입니다.");
    } else {
      await addDoc(collection(dbService, "trend"), {
        userId: userInfo?.uid,
        email: userInfo?.email,
        nickname: userInfo?.displayName,
        image: image,
        title: title,
        createdAt: getToday(),
      });

      setPopup(false);
      setImage(null);
      setTitle("");
      alert("회원님의 트렌드가 작성 완료되었습니다.");
    }
  };

  return (
    <FixedWindow>
      <Wrapper>
        <Exit onClick={() => setPopup(false)} />
        {/* 버튼 영역 */}
        <Form onSubmit={onPost}>
          {image ? (
            <>
              <ButtonWrapper>
                <SubmitButton type="submit">올리기</SubmitButton>
                <Button onClick={() => setImage(!image)}>이미지 삭제</Button>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <Button htmlFor="imgUpload">이미지 업로드</Button>
              <Input type="file" id="imgUpload" accept="image/*" onChange={(e) => saveImage(e)} />
            </>
          )}

          {/* 이미지 영역 */}
          <ImageWrapper>
            {image ? (
              <Image src={image} alt="사용자 업로드 이미지" />
            ) : (
              <NoImage src={"src/assets/uploadImage.png"} />
            )}
          </ImageWrapper>

          {/* 제목 영역 */}
          <Title placeholder="제목을 작성해주세요!" onChange={handleTitle} value={title} />
        </Form>
      </Wrapper>
    </FixedWindow>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 80%;
  padding: 30px;
  background-color: white;
  overflow-y: auto;
`;

const Exit = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;

  ${hover_gray}
`;

const Form = styled.form`
  ${flex_center}
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  ${flex_justify}
  gap: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 120px;
  height: 30px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  border: 0;
`;

const Button = styled.label`
  ${flex_center}
  width: 120px;
  height: 30px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const ImageWrapper = styled.div`
  ${flex_center}
  width: 60%;
  height: 100%;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const NoImage = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.input`
  width: 60%;
  height: 30px;
  padding: 10px;
  background-color: #ddd;
  border-radius: 8px;
  border: 0;
`;
