import React from 'react';
import { useState } from 'react';
const Form  = (props) => {
       const [datafim,setDatafim] = useState('');
       const [datainicio,setDatainicio] = useState('');
       const [curso, setCurso] = useState('');      
       
       const handleSubmit = e =>{

        e.preventDefault()
        const card = {id: Date.now(),datafim,datainicio,curso}
        props.addCard(card)

       }
       return (
        <form className='form' onSubmit={handleSubmit}>
        <input
        value = {datafim}
        type="date"
         onChange={e => setDatafim(e.target.value)}
          />
        <input type="date" 
        onChange={e => setDatainicio(e.target.value)}
        />
        <input type="text" 
        onChange={e => setCurso(e.target.value)}
        />
        <button >Salvar</button>
        </form> 
         );
    }
     
    export default Form;