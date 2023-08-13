import GameContainer from "./components/gameContainer";
import Gc2 from "./components/gc2";
import Homepage from "./components/Homepage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { StrictMode, useState } from "react";

function App() {
  //const [gameMoves, setMoves] = setMoves(0);
  //const [gameLevel, setLevel] = setLevel(1);
  const[state,setState] = useState(0);
 
  return (
    
    <Router>
    <div >
      Hello!
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Game" element={<Gc2/>}/>
      {/*<!--<GameContainer/>-->*/}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
