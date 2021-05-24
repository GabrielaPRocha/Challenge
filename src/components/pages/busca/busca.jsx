import React, { Fragment, useEffect, useState } from 'react'

import CardCurso from "../../components/CardCurso/CardCurso"

export default function Busca(props) {

    const [cursos, setCursos] = useState([])

    useEffect(() => { load() }, [props.location.search] )

    async function load(){
        try{
            const resposta = await id.search
            setCursos(resposta.data.results)
            console.log(props.location)
        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <div className="content">
                {cursos.map( (curso => <CardCurso key={curso.id} curso={curso} />))}
            </div>
        </Fragment>
    );

}