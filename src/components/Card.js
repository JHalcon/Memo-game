import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHippo } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHippo } from "@fortawesome/free-solid-svg-icons";
function Card({id,condition,cardSign,icon,setMoves,moves,cardCheck}) {
  const [status, setStatus] = useState(0);
  //const [condition, setCondition] = useState("");
  const conditionC = condition;
  function turnCard(e) {
    //e.preventDefault();
    cardCheck(cardSign,id)
    console.log('turn card'+status);
    checkMoves()
    if(status==0){
      setStatus(1);
    }
    else{
      setStatus(0);
    }
    
    console.log('turn card'+status);
    
  } 
  function checkMoves(){
    if(moves == 0||moves==1){
      console.log("uuu")
      setMoves((moves) => moves + 1);
      //setStatus(1)
    }else{if(moves==2){
      //setStatus(0)
      setMoves(0)
    }
    }
  }

  return (
    <div class="card" id={id} 
    cardSign={cardSign} status={status} className={status ? 'card-turned' + conditionC: 'card'} onClick={turnCard}>
     
      <FontAwesomeIcon icon={icon} class="fontA"/>
      {status}
    </div>
  );
}

export default Card;
