import React from 'react'


export default props => {

    return(
        <>
            <h2> [Inicio Familia] </h2>
                {props.children}
            <h2> [Fim Familia] </h2>
        </>
    )
}