import MenuHeader from "./MenuHeader";
import MenuPanel from "./MenuPanel";
import Card from "./Card.js";
import GameBoard from "./GameBoard.js";
import { useState } from "react";
import { useEffect, useRef } from 'react';

const cardData =    [ 
{id:1,sing:"\\22EE", status:0},
{id:2,sing:"kier", status:0},
{id:0,sing:"trefl",status:0},
{id:3,sing:"ccc", status:0},
{id:4,sing:"caro", status:0},
{id:5,sing:"kier", status:0},
{id:6,sing:"trefl",status:0},
{id:7,sing:"ccc", status:0},
];
 function GameContainer(props) {
  const [cardList, setCardList] = useState([]);
  const [num, setNum] = useState(0);
  let b = 0;
/*
  //const [gameMoves, setMoves] = useState(0);
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      
    }
    setCardList(array);
    console.log("gfgf"+cardList)
  }
  function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      
    }
    setCardList(array);
    console.log("gfgf"+cardList)
  }
  */

   /* useEffect(() => {
      // Runs ONCE after initial rendering
      // and after every rendering ONLY IF `prop` or `state` changes
      console.log("parent run");
      //setCardList(cardList);
    }, [cardList]);*/
    function shuffleArray() {
      let array = cardData;
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      console.log("tab goto")
      setCardList(array);
  }
  
  useEffect(() => {
    NewGame();
    console.log(cardList)
  }, [cardList]);
  function NewGame(){
    console.log("nowa gra")
    shuffleArray();
    setNum(b++)
    console.log("koniec")
    document.querySelector(".innerGame").style = "visibility:visible";
  }

    return (
      <div id="mainContainer">
       
      { /*<div class="innerDiv">
            <MenuHeader/>
            <Card id="first"/>
            <Card id="sec"/>
            <MenuPanel/>
        </div>*/
    }
    <div class="innerGame" style={{visibility:'hidden'}}> 
    <div id="gameBoard">
      <div>{num}</div>
        {cardList.map((card)=>(
            <Card id={card.id} cardSign={card.sing} status={card.status}/>

        ))}
        </div>
    {/*<GameBoard cardList={cardList}/>*/}
      <button>Reset game</button>
      </div>
      </div>
    );
  }
  
  export default GameContainer;
  