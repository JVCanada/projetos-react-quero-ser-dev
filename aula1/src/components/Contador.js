import React, { useState } from 'react'

function Contador(props) {

    const [numero, setNumero] = useState(props.inicial)

    const increment =  function() {
        setNumero(numero + props.passo)
    }

    const decrement =  function() {
        setNumero(numero - props.passo)
    }

    return(
        <>
            <h2> {numero} </h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
}

export default Contador