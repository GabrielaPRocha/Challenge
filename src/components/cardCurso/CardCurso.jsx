import React from 'react'
import './CardCurso.css';
import Form from '../pages/cadastro/Form';
const CardCurso =()=>{

    return(
    <div className="card-curso">
        <div className="curso-imagem"></div>
            <div className="card-detail">
                <span className="material-icons">star</span>
              <h1>{Form.nome}</h1>
              <h2>{Form.datainicio}</h2>
              <p>{Form.datafim}</p>
            </div>
            <a href="#" className="btn-detail">
                <span className="material-icons">add_circle</span>
              detalhes
            </a>       
        </div>  
     );
}

export default CardCurso;
