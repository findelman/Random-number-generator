import React from "react";
import styled from "styled-components";

const AccardionItem = styled.div`
  padding: 20px;
  border-radius: var(--default-border-radius);
  margin-top: 40px;
  border: 1px solid #eaeff7;
  font-weight: 700;
  font-size: 19px;
  line-height: 19px;
  cursor: pointer;
  position: relative;
`;

const AccardionArrow = styled.div``;

export const Accardion = React.memo(() => {
  return (
    <>
      <AccardionItem>
        Как это работает ?
        <AccardionArrow />
      </AccardionItem>
    </>
  );
});
