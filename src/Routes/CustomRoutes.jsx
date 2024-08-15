import { Routes,Route} from "react-router-dom";
import Pokadesk from "../Components/Pokadesk/Pokedesk";
import PokamonDetails from "../Components/PokamonDetails/PokamonDetails";

function CustomRoutes(){
    return(
      <Routes>
          <Route path="/" element={<Pokadesk/>}/>
          <Route path="/pokamon/:id" element={<PokamonDetails/>}/>
      </Routes>
    );

}

export default CustomRoutes;