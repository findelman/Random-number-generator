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
  return (
      <Container>
        <div>
          <GeneratorBox></GeneratorBox>
          <Buttons></Buttons>
          <Accardion/>
        </div>
        <div>
          <StatisticsBox></StatisticsBox>
        </div>
      </Container>
  );
}

export default App;
