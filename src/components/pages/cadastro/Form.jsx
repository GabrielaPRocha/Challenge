import React,{Component,useState} from 'react';
import CardCurso from '../../cardCurso/CardCurso'
class Form  extends Component {
  constructor(props){
    super(props)
    this.state = {
    nome: "",
    datainicio: "",
    datafim: "",
    }
  }
  componentDidMount (){
    const nome = localStorage.getItem('@form/nome');
    this.setState({nome});
    const datainicio = localStorage.getItem('@form/datainicio');
    this.setState({datainicio});
    const datafim = localStorage.getItem('@form/datafim');
    this.setState({datafim});
  }
       handleSubmit = event =>{
         event.preventDefault();

         const newNome = event.target.elements.nome.value; 
         localStorage.setItem("@form/nome", newNome);
         
         const newDatainicio = event.target.elements.datainicio.value; 
         localStorage.setItem("@form/datainicio", newDatainicio);
         
         const newDatafim = event.target.elements.datafim.value; 
         localStorage.setItem("@form/datafim", newDatafim);
         
         window.location.reload();
         console.log("event:" , newNome);
         console.log("event:" , newDatainicio);
         console.log("event:" , newDatafim);
       };
       handleLougout= () => {
         localStorage.removeItem("@form/nome");
         localStorage.removeItem("@form/datainicio");
         localStorage.removeItem("@form/datafim");
         
         window.location.reload();
       }
      render(){
        const {nome} = this.state;
        const {datainicio} = this.state;
        const {datafim} = this.state;
        return (
          <>
        {nome !== null ? (
          <CardCurso/>
        /* <div>
           <p>Testando ${nome}</p>
           <p>Testando começo ${datainicio}</p>
           <p>Testando fim ${datafim}</p>
           <button onClick={this.handleLougout}>Sair</button>
         </div>*/
        ):(
        <form className='form' onSubmit={this.handleSubmit}>
        <input type="date" name="datainicio" required/>
        <input type="date" name="datafim" required />
        <input type="text" name="nome" required />
        <button >Salvar</button>
        </form> 
        )}
        </>
       );
     }
  }
    export default Form;