import React,{Component,useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'

import Pgprinc from './components/pages/Pgprinc/Pgprinc';
import Sobre from "./components/pages/sobre/Sobre";
import Header from "./components/header/Header";
import Form from './components/pages/cadastro/Form';
import CardCurso from './components/cardCurso/CardCurso';
//function App(){
  class App extends Component {
    constructor(){
    super()
    this.state = {
    cards: [],
    filter:''
}}
addCard(curso){
  card.id = Date.now() 
  this.setState({cards: [...this.state.cards, card]})
  }
  addCurso(curso){
     this.setState({cursos: [...this.state.cursos, curso]})
    }
  render(){
  return (
    <>
    <div className="App">   
      <BrowserRouter>
      <Header/>
      <NavLink to="/Pgprinc" className="nav-link">Inicio</NavLink>
      <NavLink to="/Sobre" className="nav-link">Sobre</NavLink>
      <NavLink to="/cadastro" className="nav-link">Cadatre</NavLink>
      <Switch>
        <Route exact path="/" component={Pgprinc}/>
        <Route path="/pgprinc" component={Pgprinc}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/cadastro" component={Form}/>
      </Switch>
      </BrowserRouter>
    </div>
     <section className="card">
     {this.state.cards
     .filter(
        card =>
         card.curso === this.state.filter || this.state.filter ==='')
     .map((card) => (
     <CardCurso
     key={card.id}
     card={card} />
     ))}
</section>
</>
  );
}
}
export default App;