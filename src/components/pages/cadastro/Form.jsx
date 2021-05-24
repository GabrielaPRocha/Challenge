import React from 'react';
import { useState } from 'react';

const Form  = (props) => {
       const [datafim,setDatafim] = useState();
       const [datainicio,setDatainicio] = useState();
       const [curso, setCurso] = useState();      
       
       const handleSubmit = e =>{

        e.preventDefault()
        const card = {id: Date.now(),datafim,datainicio,curso}
        props.addCard(card)

       }
       return (
        <form className='form' onSubmit={handleSubmit}>
        <input
        value = {datafim}
        type="data"
         onChange={e => setDatafim(e.target.value)}
          />
        <input type="date" 
        onChange={e => setDatainicio(e.target.value)}
        />
        <select  onChange={e => setCurso(e.target.value)}>
        {props.cursos.map(curso =>
        <option key={curso.name}>{curso.name}</option>)
        }
        </select>
        <button >Salvar</button>
        </form> 
         );
    }
     
    export default Form;