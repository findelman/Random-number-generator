import React from "react";
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
  const [changeText, setChangeText] = React.useState(
    "лотерея «LOTO 6/49»"
  );

  // переделать
  function AccardionItemClick(event) {
    setChangeText(event.currentTarget.innerText);
  }
  return (
      <Container>
        <div>
          <GeneratorBox click={AccardionItemClick}  text={changeText}></GeneratorBox>
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
