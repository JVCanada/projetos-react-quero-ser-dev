import React, { useState } from 'react'
import Filho from './Filho'

export default props => {

    const [texto, setTexto] = useState('') //definindo o estado inicial
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
        <h2> {texto}{num} </h2>
        <Filho funcao={exibirValor}/>
        </>
    )
    
}