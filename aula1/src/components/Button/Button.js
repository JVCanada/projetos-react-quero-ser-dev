import React from 'react'
import './Button.css'

export default props => {

    function cadastrar() {
        console.log('cadastrou');
    }

    return (
        <button onClick={cadastrar} className="principal">
            Cadastrar
        </button>
    )
    
}