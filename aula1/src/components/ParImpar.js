import React from 'react'

export default ({num = 0}) => {

    return(
        <>
            <div>

                <h2> O seu número é: </h2>
                {num % 2 == 0
                ? <h3> Par </h3>
                : <h3> Impar </h3>
                }
            </div>
        </>
    )

}