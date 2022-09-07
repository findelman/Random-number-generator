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

function App() {
  const [change, setChange] = useState(['лотерея «LOTO 6/49»','https://static.sz.kz/img/logos/649.svg']);
  const [changeText,changeImg] = change
  function AccardionItemClick(event) {
    let img = event.currentTarget.querySelector('img')
    setChange([event.currentTarget.innerText,img.src])

  }
  return (
      <Container>
        <div>
          <GeneratorBox click={AccardionItemClick}  text={changeText} img={changeImg} numbers={'123'}></GeneratorBox>
          <Buttons></Buttons>
          <Accardion/>
        </div>
        <div>
          <StatisticsBox text={changeText}></StatisticsBox>
        </div>
      </Container>
  );
}

export default App;
