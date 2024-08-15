import Search from "../SearchComponent/Search";
import "./Pokadesk.css"
import PokamonList from "../PokamonList/PokamonList";
function Pokadesk() {
    return(
        <div className="pokadesk-wrapper">
            
            <Search />
            <PokamonList />
            
        </div>
    )
}

export default Pokadesk;