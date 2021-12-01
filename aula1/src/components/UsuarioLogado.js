import React from 'react'
import If from './If'

export default props => {

    const usuario = props.usuario || {}

    return (

        <>
            <If test = {usuario && usuario.nome && usuario.email}>
                <h2> Usuario logado</h2>
                <h4> 
                    User: {usuario.nome} - Email: {usuario.email}
                </h4>
            </If>
        </>
    )
}