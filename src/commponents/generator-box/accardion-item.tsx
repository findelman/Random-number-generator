import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(43, 93, 168, 0.1);
  padding: 14px 15px;
  transition: 500ms;
  &:hover {
    background: #eaeff7;
  }
`;
const BoxImg = styled.img`
  width: 37px;
  margin-right: 14px;
`;
export const AccardionItem = ({ img, actionHandler, text }) => {
  return (
    <Box onClick={actionHandler}>
      <BoxImg src={img} />
      {text}{" "}
    </Box>
  );
};
