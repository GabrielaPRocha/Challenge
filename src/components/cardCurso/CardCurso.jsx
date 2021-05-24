import React from 'react'
import { Card } from 'react-bootstrap';
import './CardCurso.css';
import Form from '../pages/cadastro/Form';
import App from '../../App';
const CardCurso =({curso})=>{
    
    return(

    <div className="card-curso">
        <div className="curso-imagem"></div>
            <div className="card-detail">
                <span className="material-icons">star</span>
                9,5
              <h1>{cards.curso}</h1>
              <h2>{cards.datainicio}</h2>
              <p>{cards.datafim}</p>
            </div>
            <a href="#" className="btn-detail">
                <span className="material-icons">add_circle</span>
              detalhes
            </a>       
    </div> 

     );
}
export default CardCurso;
/* < <h1>{this.props.curso}</h1>
                <p>{this.props.datainicio}</p>
                <h3>5 semanas</h3>*/