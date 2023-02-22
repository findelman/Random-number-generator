import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";
import { IAccardionItem } from "./types";

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

export const AccardionItem = React.memo(
  ({ img, text, limit, amount }: IAccardionItem) => {
    const { setgameInfo } = useContext(GameContext);
    return (
      <Box
        data-number-limit={limit}
        onClick={() => {
          setgameInfo({
            gameTitle: text,
            gameImg: img,
            amountNumber: amount,
            limitNumber: limit,
            generate: true,
          });
        }}
        data-amount-number={amount}
      >
        <BoxImg src={img} />
        {text}
      </Box>
    );
  }
);
