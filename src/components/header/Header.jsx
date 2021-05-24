import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import "./Header.css"

function Header(props){
    const [search,setSearch] = useState("");
    
    function buscar(e){
        e.preventDefault()
        props.history.push("/busca")
    }
    return(
        <div className="Header">
            <div className="Logo">AllyCursos</div>
            <form onSubmit={buscar}>
            <input type="text"
             name ="search" 
             id="search"
              onChange={e=>setSearch(e.target.value)}/>
            <button type="submit">Buscar</button>
            </form>
        </div>
    );
}
export default withRouter(Header)