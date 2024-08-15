import "./Pokamon.css"
import { Link } from "react-router-dom";
function Pokamon({name,image,id}){
  return(
    <div className="pokamon">
        <Link to={`pokamon/${id}`}>
        <div>
            <img src={image} className="pokamon-img"/>
        </div>
        <div className="pokamon-name">{name}</div> 
        </Link>
        
    </div>
  )
}

export default Pokamon;