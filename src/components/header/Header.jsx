import React,{useState} from 'react'
//import {withRouter} from 'react-router-dom'
import "./Header.css"
import Busca from '../../components/pages/busca/busca.jsx'
const Header =() => {
    const[card,setCard] = useState('')
    
   function handleChange(e){
         setCard(e.target.value)
       }
    return(
        <div className="Header">
            <div className="Logo">AllyCursos</div>
            <form >
            <input type="text"
             name ="search" 
             id="search"
              onChange={handleChange} />
            <button >Buscar</button>
            </form>
        </div>
    );
}
export default Header