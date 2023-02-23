import React, { useState } from "react";
import styled from "styled-components";

const AccardionWrapper = styled.div`
  padding: 20px ;
  border-radius: var(--default-border-radius);
  margin-top: 40px;
  border: 1px solid #eaeff7;

  cursor: pointer;
  position: relative;
  h2 {
    line-height: 19px;
    /* margin-bottom: 20px; */
    font-weight: 700;
    font-size: 19px;
  }
`;

const AccardionArrow = styled.div``;

const AccardionHidden = styled.div<{ isShow?: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
`;

const AccardionItem = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  span {
    color: #2b5da8;
    font-weight: 700;
  }
    margin-top: 25px;
`;

export const Accardion = React.memo(() => {
  const [showAccardion, setShowAccardion] = useState(false);

  return (
    <>
      <AccardionWrapper
        onClick={() => {
          setShowAccardion(!showAccardion);
        }}
      >
        <h2>Как это работает ?</h2>
        <AccardionArrow />
        <AccardionHidden isShow={showAccardion}>
          <AccardionItem>
            <span>1.</span>
            &nbsp; Выбери лотерею.
          </AccardionItem>
          <AccardionItem>
            <span>2.</span>
            &nbsp; Нажми на кнопку “сгенерировать” и купи билет со счастливой
            комбинацией. лотерею.
          </AccardionItem>
          <AccardionItem>
            <span>3.</span>
            &nbsp; Или собери свою комбинацию из чисел в статистике и купи
            билет.
          </AccardionItem>
        </AccardionHidden>
      </AccardionWrapper>
    </>
  );
});
