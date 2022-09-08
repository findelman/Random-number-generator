import React from "react";
import styled from "styled-components";

const GenerateButton = styled.button`
  padding: 12px 0px;
  border-radius: 30px;
  color: white;
  color: ${(props) => (props.primary ? "#000" : "white")};
  background: ${(props) => (props.primary ? "#FFCC01" : "#2b5da8")};
  width: ${(props) => (props.primary ? "40%" : "60%")};;
  border: unset;
  cursor: pointer;
  transition: 300ms;
  &:active {
    transform: scale(0.95);
  }
`;

const ButtonsWrapper = styled.div`
display: flex;
margin-top: 40px;
column-gap: 10px;
    
`
export const Buttons = ({handleClick}) => {
 return (
    <ButtonsWrapper>
      <GenerateButton onClick={handleClick}>Сгенерировать</GenerateButton>
      <GenerateButton primary>Купить билет</GenerateButton>
    </ButtonsWrapper>
  );
};
