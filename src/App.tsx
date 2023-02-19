import { MainContainer } from "./commponents/container/main";
import { GameProvaider } from "./context/GameProvaider";

function App() {
  return (
    <GameProvaider>
      <MainContainer />
    </GameProvaider>
  );
}

export default App;
