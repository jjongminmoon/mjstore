import styled from "@emotion/styled";

export const box_shadow =
  "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";

export const flex_center = `display: flex; align-items: center; justify-content: center;`;
export const flex_align = `display: flex; align-items: center;`;
export const flex_justify = `display: flex; justify-content: center;`;
export const flex_column = `display: flex; flex-direction: column;`;

export const hover_gray = `&:hover {background-color: #e7e5e4; border-radius: 5px;}`;

export const Button = styled.button`
  position: relative;
  ${flex_justify}
  width: 45px;
  height: 45px;
  font-size: 25px;
  background-color: transparent;
  border: 0;
  padding-top: 5px;
  color: #57534e;

  ${hover_gray}
`;

export const PageContainer = styled.section`
  position: relative;
  width: 100%;
  margin-top: 30px;
  padding: 20px 120px;

  @media (max-width: 730px) {
    padding: 10px 20px 20px 20px;
  }
`;

export const CartNumber = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const ImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  padding: 10px;
`;

export const CartImage = styled.img`
  width: 20%;
  background-color: #f5f5f5;
  cursor: pointer;
`;

export const CartNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding-left: 20px;
  cursor: pointer;
`;

export const CartEnName = styled.div`
  font-size: 11px;
  color: #999;

  @media (max-width: 580px) {
    font-size: 7px;
  }
`;

export const Size = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`;

export const CartPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

export const Management = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;

  @media (max-width: 580px) {
    width: 15%;
  }
`;

export const NoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border: 1px solid #ddd;
  border-top: 0;
`;

export const FixedWindow = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
