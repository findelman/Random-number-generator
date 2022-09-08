import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import styled from "styled-components";

import { Accardion } from "./commponents/accardion";
import { GeneratorBox } from "./commponents/generator-box";
import { Buttons } from "./commponents/generator-box/buttons";
import { StatisticsBox } from "./commponents/statistics-box";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1140px;
  margin: 90px auto 0px;
`;

const OutNumber = styled.div`
  margin-right: 8px;
`

function App() {
  const [change, setChange] = useState([
    "лотерея «LOTO 6/49»",
    "https://static.sz.kz/img/logos/649.svg",
  ]);
  const [changeText, changeImg] = change;

  const [outNumbers, setOutNumbers] = useState([18,22,26,27,32,43]);

  const [generateConifg, setGenerateConfig] = useState([6,46])  
  const [limitNumber, amountNumber] = generateConifg;

  function AccardionItemClick(event) {
    let target = event.currentTarget;
    let img = target.querySelector("img");
    setChange([target.innerText, img.src]);
  
    setGenerateConfig([parseInt(target.dataset.numberLimit),parseInt(target.dataset.amountNumber)])
    console.log(limitNumber, amountNumber)
    generateRandomNumbers()
  }

  function generateRandomNumbers() {
    let arr: number[] = []
    for (let i = 0; i < limitNumber; i++) {
      let randomNumber = Math.floor(Math.random() * amountNumber)
      arr.push(randomNumber)
    }
    console.log(limitNumber, amountNumber)
    setOutNumbers(arr.sort((a,b) => a -b))
  }

  return (
    <Container>
      <div>
        <GeneratorBox
          click={AccardionItemClick}
          text={changeText}
          img={changeImg}
          numbers={outNumbers.map((item) => <OutNumber>{item}</OutNumber>)}
        ></GeneratorBox>
        <Buttons handleClick={generateRandomNumbers} />
        <Accardion />
      </div>
      <div>
        <StatisticsBox text={changeText}></StatisticsBox>
      </div>
    </Container>
  );
}

export default App;
