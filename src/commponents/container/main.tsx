import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apiStatistics } from "../../fake-api/api";
import { Accardion } from "../accardion";
import { GeneratorBox } from "../generator-box";
import { Buttons } from "../generator-box/buttons";
import { StatisticsBox } from "../statistics-box";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1140px;
  margin: 90px auto 0px;
`;

const OutNumber = styled.div`
  margin-right: 8px;
`;

export const MainContainer = () => {
  const [changeInfo, setChangeInfo] = useState({
    limitNumber: 6,
    amountNumber: 46,
    gameTitle: "лотерея «LOTO 6/49»",
    gameImg: "https://static.sz.kz/img/logos/649.svg",
  });

  const { limitNumber, amountNumber, gameTitle, gameImg } = changeInfo;

  const [randomNumbers, setRandomNumbers] = useState([18, 22, 26, 27, 32, 43]);

  const generateRandomNumbers = () => {
    let arr: number[] = [];
    for (let i = 0; i < limitNumber; i++) {
      let randomNumber = Math.floor(Math.random() * amountNumber + 1);
      arr.push(randomNumber);
    }
    console.log(limitNumber, amountNumber);
    setRandomNumbers(arr.sort((a, b) => a - b));
  };

  useEffect(() => {
    generateRandomNumbers();
  }, [changeInfo]);

  return (
    <Container>
      <div>
        <GeneratorBox
          changeInfo={setChangeInfo}
          text={gameTitle}
          img={gameImg}
          numbers={randomNumbers.map((item) => (
            <OutNumber>{item}</OutNumber>
          ))}
        ></GeneratorBox>
        <Buttons handleClick={generateRandomNumbers} />
        <Accardion />
      </div>
      <div>
        <StatisticsBox
          limitNumber={limitNumber}
          numberCount={randomNumbers.length}
          numberArray={randomNumbers}
          randomNumbers={setRandomNumbers}
          api={apiStatistics}
          text={gameTitle}
        ></StatisticsBox>
      </div>
    </Container>
  );
};
