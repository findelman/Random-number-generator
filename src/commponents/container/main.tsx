import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "../../context/GameProvaider";
import { apiStatistics } from "../../fake-api/api";
import { useGenerateRandomNumbers } from "../../hooks/useGenerateRandomNumbers";
import { useStatisticData } from "../../hooks/useStatisticData";
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
  const { gameNumber, setGameNumber, gameInfo, setgameInfo } =
    useContext(GameContext);

  const { limitNumber, amountNumber, gameTitle, gameImg } = gameInfo;

  const statisticData = useStatisticData(gameInfo);

  const generateRandomNumbers = () => {
    const arr: number[] = [];
    for (let i = 0; i < limitNumber; i++) {
      const randomNumber = Math.floor(Math.random() * amountNumber + 1);
      arr.push(randomNumber);
    }
    setgameInfo({ ...gameInfo, ["generate"]: false });
    setGameNumber(arr.sort((a, b) => a - b));
  };

  return (
    <Container>
      <div>
        <GeneratorBox
          changeInfo={gameInfo}
          text={gameTitle}
          img={gameImg}
          numbers={gameNumber.map((item) => (
            <OutNumber>{item}</OutNumber>
          ))}
        ></GeneratorBox>
        <Buttons handleClick={generateRandomNumbers} />
        <Accardion />
      </div>
      <div>
        <StatisticsBox
          numberCount={gameNumber.length}
          randomNumbers={setGameNumber}
          api={statisticData}
          text={gameTitle}
        />
      </div>
    </Container>
  );
};
