import React from 'react'

export default props => {

    function gerarNumero() {
        return Math.random()
    }

    return (
        <button onClick={ function() {
            const n = gerarNumero() //armazena o retorno da função em uma constante
            props.funcao(n, 'O valor é: ') //passa os dados para o Pai através dos parâmetros da função
            }}
        >
            Executar
        </button>
    )
}