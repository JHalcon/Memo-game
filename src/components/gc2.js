import { useState, useEffect } from 'react'
import Card from './Card'
///import { faHippo } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";

const cardImages = [
{id:1,sing:'faDog', status:0, icon:faDog,condition:""},
{id:2,sing:"faDog", status:0,icon:faDog,condition:""},
{id:0,sing:"faHippo",status:0,icon:faHippo,condition:""},
{id:3,sing:"faHippo", status:0,icon:faHippo,condition:""},
{id:4,sing:"faHorse", status:0,icon:faHorse,condition:""},
{id:5,sing:"faHorse", status:0,icon:faHorse,condition:""},
{id:6,sing:"faFish",status:0,icon:faFish,condition:""},
{id:7,sing:"faFish", status:0,icon:faFish,condition:""},
  
]

function Gc2() {
  const [cardList, setCardList] = useState([])
  const [moves, setMoves] = useState(0);
  const [points, setPoints] = useState(0);
  const [cardOne, setCardOne] = useState("");
  const [cardTwo, setCardTwo] = useState("");
  const [cardOneId, setCardOneId] = useState("");
  const [cardTwoId, setCardTwoId] = useState("");
  //const [points, setPoints] = useState(0);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card}))

    setCardList(shuffledCards)
    setMoves(0);
    setPoints(0);
  }
  function test (i, id) {
    setCardTwo(i);
    setCardTwoId(id);
  }
function CardCheck(icon,id){
  if(moves==0&&cardOne==""){
  alert(icon);
  setCardOne(icon)
  setCardOneId(id)
  }else{
  if((moves==1)){
   //checkPair(cardOne,cardTwo) =  await (setCardTwo(icon),
   // setCardTwoId(id))
   //test(icon,id)
   test(icon,id).then(checkPair(cardOne,cardTwo));
   //React.useEffect(checkPair(cardOne,cardTwo),setCardTwoId(id));
    // ... do some other actions  
  };
    //fetch(setCardTwo(icon),setCardTwoId(id)).then(checkPair(cardOne,cardTwo));
  }
  }

  
  function checkPair(cardOne,cardTwo){
    if(cardOne==cardTwo){
      //alert(icon)
      console.log("tak")
      setPoints((points) => points + 1);
    }else{
        console.log("nie")
        console.log(cardOneId)
        console.log(cardTwoId)
        cardList[cardOneId].condition="-wrong";
        cardList[cardTwoId].condition="-wrong";
    } 

  }
  
    /*if(moves==2){
      if(cardOne==cardTwo){
        
        setPoints((points) => points + 1);

      }
      else{
        cardList[cardOneId].condition="-wrong";
      }
    
  }
  */


/*
  // start new game automagically
  useEffect(() => {
    shuffleCards()
  }, [])
*/
  return (
    <div id="gameBord">
      <button onClick={shuffleCards}>New Game</button>

      <div id="gameBoard">
        {cardList.map((card,index) => (
          <Card
            key={index}
            id={card.id} 
            cardSign={card.sing} 
            status={card.status}
            icon={card.icon}
            setMoves={setMoves} 
            moves = {moves}
            cardCheck={CardCheck}
            condition={card.condition}
          />
        ))}
      </div>
    </div>
  );
}

export default Gc2