import styled from "@emotion/styled";
import { dbService } from "@/firebase";
import { AuthContext } from "@/store/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FixedWindow, flex_align, flex_justify } from "../Common/commonStyled";
import { getToday } from "../Common/getToday";
import { useParams } from "react-router-dom";

interface ReviewInputProps {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReviewInput({ setPopup }: ReviewInputProps) {
  const userInfo = useContext(AuthContext);
  const { id } = useParams();
  const stars = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [text, setText] = useState("");
  const score = clicked.filter((star) => star === true).length;

  const handleStars = (index: any) => {
    let starsStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      starsStates[i] = i <= index ? true : false;
    }
    setClicked(starsStates);
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "" || score === 0) {
      alert("리뷰와 별점 모두 입력해주세요.");
      return;
    } else {
      await addDoc(collection(dbService, "review"), {
        userId: userInfo?.uid,
        nickname: userInfo?.displayName,
        review: text,
        score: score,
        createdAt: getToday(),
        product_id: id,
      });
    }

    setPopup(false);
    setText("");
    setClicked([]);
    alert("리뷰 작성 완료.");
  };

  return (
    <FixedWindow>
      <WriteWrapper>
        <Form onSubmit={onPost}>
          Review
          <ButtonWrapper>
            <Button
              onClick={() => {
                setPopup(false);
                setText("");
                setClicked([]);
              }}
            >
              취소
            </Button>
            <Button type="submit">확인</Button>
          </ButtonWrapper>
          <StarWrapper>
            {stars.map((star) => (
              <Star
                key={star}
                onClick={() => handleStars(star)}
                color={clicked[star] ? "yellow" : "#ddd"}
              />
            ))}
            <Score>{score}.0점</Score>
          </StarWrapper>
          <TextArea placeholder="리뷰를 작성해주세요." onChange={handleTextArea} value={text} />
        </Form>
      </WriteWrapper>
    </FixedWindow>
  );
}

const WriteWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 30%;
  padding: 20px;
  background-color: white;
  overflow-y: auto;
  border-radius: 10px;
`;

const Form = styled.form`
  position: relative;
  ${flex_justify}
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const StarWrapper = styled.div`
  ${flex_align}
  width: 200px;
  height: 30px;
  font-size: 30px;
  transition: all 0.1s linear;

  &:active {
    transform: scale(1.2);
  }
`;

const Star = styled(AiFillStar)<{ color: string }>`
  cursor: pointer;
`;

const Score = styled.p`
  font-size: 18px;
  margin-left: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
`;

const Button = styled.button`
  ${flex_justify}
  width: 100px;
  height: 25px;
  background-color: black;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  border: 0;
`;
