import React from "react";
import { accardionItemsData, AccardionItem } from "./accardion-item";
import styled from "styled-components";

const AccardionWrapperHidden = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  box-shadow: 0px 5px 25px rgb(43 93 168 / 15%);
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 5;
  overflow: hidden;
  transition: 200ms linear;
  border-radius: 0px 0px 15px 15px;
  ${({ accardion }) =>
    accardion
      ? "opacity: 1; visibility: visible;"
      : "opacity: 0; visibility: hidden; pointer-events: none;"}
`;

export const AccardionItemsWrapper = React.memo(
  ({ accardion, changeInfo }: any) => {
    return (
      <AccardionWrapperHidden accardion={accardion}>
        {accardionItemsData.map((item, key) => {
          return <AccardionItem key={key} changeInfo={changeInfo} {...item} />;
        })}
      </AccardionWrapperHidden>
    );
  }
);
