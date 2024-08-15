import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokamonDetails.css"


function PokamonDetails(){
    const {id}=useParams()
    const [pokamon,setPokamon]=useState({})
    async function downloadPokamons(){
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(response.data);
        setPokamon(
            {name: response.data.name,
             image:response.data.sprites.other.dream_world.front_default,
             weight:response.data.weight,
             height:response.data.height,
             types:response.data.types.map((t)=>t.type.name)
            })
    }
    useEffect(()=>{
     downloadPokamons();
    },[])
    return(
    <div className="pokamon-details-wrapper">
        <img  src={pokamon.image} className="pokamon-deatils-image" />
        <div className="pokamon-details-name">Name: {pokamon.name}</div>
        
        <div className="text">Height : {pokamon.height}cm</div>
        <div className="text">Weight : {pokamon.weight}kg</div>
        {console.log(pokamon.types)}
        <div className="pokamon-details-type">
          <h2>Types :</h2>
          <ul>
          {
            (pokamon.types) && pokamon.types.map((t,i)=><li key={i}>{t}</li>)
          }
          </ul>
          
        </div>
            
       

    </div>
 )
}

export default PokamonDetails;