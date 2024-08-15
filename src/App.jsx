import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokadesk from './Components/Pokadesk/Pokedesk'
import PokamonList from './Components/PokamonList/PokamonList'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'


function App() {
  

  return (
    <>
     <h1 id="pokadesk-heading">
     <Link to={'/'}>
      Pokadesk
      </Link>
      </h1>
     <CustomRoutes/>
   
    </>
  )
}

export default App
