import { useEffect, useState } from "react";
import axios from "axios";
import "./PokamonList.css"
import Pokamon from "../Pokamon/Pokamon";

 

function PokamonList(){
    const [pokamonList,setPokamonList]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [pokadesk_url,setPokadesk_url]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [next_url,setNext_url]=useState("");
    const [prev_url,setPrev_url]=useState("");
    async function downloadPokamons(){
        
       setIsLoading|(true);
        const response = await axios.get(pokadesk_url)
        const pokamonResult=response.data.results;
        console.log(response);
        setNext_url(response.data.next);
        console.log(response.data.next);
        console.log(response.data.previous)
        setPrev_url(response.data.previous);
        const pokamonPromisesResult=pokamonResult.map((pokemon)=> axios.get(pokemon.url))
        const pokamonData=await axios.all(pokamonPromisesResult)
        console.log(pokamonData);
        const res=pokamonData.map(pokaData=>{
            const pokamon=pokaData.data;
            return {
                id: pokamon.id,
                name:pokamon.name,
                image: pokamon.sprites.other.dream_world.front_default,
                types: pokamon.types}
        });
        console.log(res)
        setPokamonList(res)
        setIsLoading(false);
     }
    useEffect(()=>{
    console.log("Effect is called");
     downloadPokamons();
    },[pokadesk_url,])
    return(

        <div className="PokamonList-wrapper">
          <div>Pokamon List</div>
          <div className="pokamon-wrapper">
            {(!isLoading) ? pokamonList.map((p)=><Pokamon name={p.name} image={p.image} key={p.id} id={p.id}/>): " Loading........"}
            </div>

            <div className="control">
                <button disabled={prev_url==null} onClick={()=>setPokadesk_url(prev_url)}>Prev</button>
                <button disabled={next_url==null} onClick={()=>setPokadesk_url(next_url)}>Next</button>
            </div>
          
        </div>
    )
}

export default PokamonList;