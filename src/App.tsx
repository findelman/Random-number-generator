import React from "react";
import styled from "styled-components";

import { Accardion } from "./commponents/accardion";
import { GeneratorBox } from "./commponents/generator-box";
import { Buttons } from "./commponents/generator-box/buttons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <div>
          <GeneratorBox></GeneratorBox>
          <Buttons></Buttons>
          <Accardion/>
        </div>
      </Container>
    </div>
  );
}

export default App;
