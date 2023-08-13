import Button from "./Button";
import { useState } from "react";

function MenuPanel(props) {
  
    return (
      <div id="menuPanel">
        <Button text="Start the game" onClick={props.NewGame} Linkpath="/Game"/>
        <Button text="How to play"/>
      </div>
    );
  }
  
  export default MenuPanel;
  