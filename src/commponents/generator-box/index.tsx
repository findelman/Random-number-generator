import React from "react";
import styled from "styled-components";
import { AccardionItem } from "./accardion-item";

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 25px var(--default-border-color);
  border-radius: var(--default-border-radius);
`;

const BoxWrapper = styled.div`
  padding: 20px;
  &:first-child {
    border-bottom: 1px solid #eaeff7;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 23px;
  line-height: 27px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const AccardionWrapper = styled.div`
  padding: 14px 15px;
  position: relative;
  transition: 300ms;
  border-radius: ${({ accardion }) =>
    accardion ? "15px 15px 0px 0px" : "var(--default-border-radius)"};
  background: ${({ primary }) =>
    primary ? "white" : "var(--default-border-color)"};
  cursor: ${({ primary }) => (primary ? "unset" : "pointer")};
  display: flex;
  align-items: center;
`;

const AccardionImg = styled.img`
  width: 37px;
  margin-right: 14px;
`;
const NumberOutput = styled(AccardionWrapper)`
  border: 1px solid var(--default-border-color);
  margin-top: 20px;
`;

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
  transition: 300ms;
  border-radius: 0px 0px 15px 15px;
  ${({ accardion }) =>
    accardion
      ? "opacity: 1; visibility: visible;"
      : "opacity: 0; visibility: hidden;"}
`;

const AccardionTitle = styled.div``;

export function GeneratorBox({ click, text, img, numbers }) {
  const [accardion, setAccardion] = React.useState(false);

  const toggleIsAccardion = () => {
    setAccardion((current) => !current);
  };
  return (
    <Box>
      <BoxWrapper>
        <Title>Генератор cлучайных чисел</Title>
        <SubTitle>
          Создавайте свои счастливые лотрейные комбинации для тиражных лотерей.
        </SubTitle>
      </BoxWrapper>
      <BoxWrapper>
        <AccardionWrapper onClick={toggleIsAccardion} accardion={accardion}>
          <AccardionImg src={img} />
          <AccardionTitle>{text}</AccardionTitle>
          <AccardionWrapperHidden accardion={accardion}>
            <AccardionItem
              limit={6}
              amount={49}
              actionHandler={click}
              img={"https://static.sz.kz/img/logos/649.svg"}
              text={"лотерея «LOTO 6/49»"}
            />
            <AccardionItem
              limit={5}
              amount={36}
              actionHandler={click}
              img={"https://static.sz.kz/img/logos/536.svg"}
              text={"лотерея «5/36»"}
            />
            <AccardionItem
              limit={10}
              amount={80}
              actionHandler={click}
              img={"https://static.sz.kz/img/logos/keno.svg"}
              text={"лотерея «KENO»"}
            />
                        <AccardionItem
              limit={10}
              amount={80}
              actionHandler={click}
              img={"https://static.sz.kz/img/logos/keno2.svg"}
              text={"лотерея «KENO2»"}
            />
                  <AccardionItem
              limit={3}
              amount={9}
              actionHandler={click}
              img={"https://static.sz.kz/img/logos/777.svg"}
              text={"лотерея «777»"}
            />
          </AccardionWrapperHidden>
        </AccardionWrapper>
        <NumberOutput primary>{numbers}</NumberOutput>
      </BoxWrapper>
    </Box>
  );
}
