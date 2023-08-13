import {useState} from 'react';
import Card from "./Card.js";
import { useEffect, useRef } from 'react';
function GameBoard(props) {
  const [cardList, setCardList] = useState([])
  //useState(props.cardList);
  /*useEffect(() => {
  setCardList({...props.cardList});
  
  });*/    useEffect(() => {
      // Runs ONCE after initial rendering
      // and after every rendering ONLY IF `prop` or `state` changes
      setCardList(props.cardList)
      console.log("hhh")
    }, [props.cardList]);
    return (
      <div id="gameBoard">
        {cardList.map((card)=>(
            <Card id={card.id} cardSign={card.sing} status={card.status}/>

        ))}
        </div>
    );
  }
  
  export default GameBoard;
  