import styled from "@emotion/styled";
import ReviewInput from "./ReviewInput";
import { AuthContext } from "@/store/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { SiCodereview } from "react-icons/si";
import { flex_align, flex_column, flex_justify, hover_gray } from "../Common/commonStyled";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "@/firebase";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function Review() {
  const userInfo = useContext(AuthContext);
  const { id } = useParams();
  const [popup, setPopup] = useState(false);
  const [reviewData, setReviewData] = useState<any>([]);
  const filteredProductReview = reviewData.filter((item: any) => item.product_id === id);
  const reviewDataUid = filteredProductReview.map((data: any) => data.userId);
  const totalStarScore =
    filteredProductReview.reduce((total: any, item: any) => {
      return total + item.score;
    }, 0) / filteredProductReview.length;

  useEffect(() => {
    const q = query(collection(dbService, "review"));
    const unsubscribe = onSnapshot(q, (qeurySnapshot) => {
      const arr = qeurySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setReviewData(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const starScore = (index: any) => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      i < index
        ? result.push(<AiFillStar key={i} color={"yellow"} />)
        : result.push(<AiFillStar key={i} color={"#ddd"} />);
    }
    return result;
  };

  return (
    <Wrapper>
      <Title>
        <SiCodereview />
        Review
        <PopupButton
          onClick={() => {
            if (reviewDataUid.includes(userInfo?.uid)) {
              alert("이미 리뷰를 작성하셨습니다.");
            } else if (userInfo === null) {
              alert("리뷰 작성은 회원만 이용 가능합니다.");
            } else if (userInfo.displayName === null) {
              alert("리뷰 작성을 위해 닉네임을 먼저 정해주세요.");
            } else {
              setPopup(true);
            }
          }}
        >
          작성하기
        </PopupButton>
        {popup ? <ReviewInput setPopup={setPopup} /> : null}
      </Title>
      <ReviewWrapper>
        <TotalStarScore>
          평균 별점: <AiFillStar color={"yellow"} />
          {isNaN(totalStarScore) ? "아직 작성된 리뷰가 없어요!" : `${totalStarScore.toFixed(1)}점`}
        </TotalStarScore>
        {reviewData
          .filter((item: any) => item.product_id === id)
          .map((item: any) => (
            <ReviewList key={item.createdAt}>
              <Header>{item.nickname}</Header>
              <ContentWrapper>
                <Flex>
                  {starScore(item.score)}
                  <Score>{item.score}.0점</Score>
                </Flex>
                <p>{item.review}</p>
              </ContentWrapper>
              <TimeStamp>{item.createdAt}</TimeStamp>
            </ReviewList>
          ))}
      </ReviewWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
  ${flex_align}
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const PopupButton = styled.div`
  ${flex_justify}
  width: 100px;
  height: 25px;
  background-color: black;
  font-size: 16px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
`;

const ReviewWrapper = styled.div`
  ${flex_column}
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
`;

const TotalStarScore = styled.div`
  ${flex_align}
  gap: 10px;
  margin-bottom: 10px;
`;

const ReviewList = styled.div`
  ${flex_column}
  border: 1px solid #ddd;
  padding: 5px;
  font-size: 13px;
`;

const Header = styled.div`
  background-color: #ddd;
  padding: 5px;
`;

const ContentWrapper = styled.div`
  padding: 5px;
  border: 1px solid #ddd;
`;

const Flex = styled.div`
  ${flex_align}
  margin-bottom: 20px;
`;

const Score = styled.p`
  margin-left: 5px;
  padding-bottom: 2px;
`;

const TimeStamp = styled.p`
  color: #ccc;
  font-size: 12px;
  margin-left: auto;
`;
