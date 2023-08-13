import {Link} from "react-router-dom";

function Button({text, Linkpath},props) {
    return (
    <Link to={Linkpath}> <div onClick={props.clickF}class="button">
        {text}
      </div> </Link> 
    );
  }
  
  export default Button;
  