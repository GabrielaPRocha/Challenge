import React, {useState } from 'react'

import CardCurso from "../../cardCurso/CardCurso";
import Form from '../../pages/cadastro/Form';
import Header from '../../header/Header'

const Busca = ({children,tofind}) => {
const regex = new RegExp (`(${tofind})`, 'i')
    return children.split(regex).map((chunk, index) =>{
        if (lower(chunk) === lower(tofind)){
            return (CardCurso)
        }
        return chunk
    })
}
function lower(string){
    return string.toLowerCase()
}
export default Busca;