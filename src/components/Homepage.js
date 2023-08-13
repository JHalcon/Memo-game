import MenuHeader from "./MenuHeader";
import MenuPanel from "./MenuPanel";
import Card from "./Card.js";
import { useState } from "react";

function Homepage() {
  
  const [gameLevel, setLevel] = useState(1);
  
    return (
      <div id="mainContainer">
        <div class="innerDiv">
            <MenuHeader/>
            <Card id="first"/>
            <Card id="sec"/>
            <MenuPanel />
              {/*</MenuPanel>NewGame={NewGame} cardList={cardList}/>*/}
        </div>
      </div>
    );
  }
  
  export default Homepage;
  