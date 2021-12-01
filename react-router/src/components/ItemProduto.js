import React from "react";
import { Link } from "react-router-dom";

export default function ProdutoItem(props) {
    const produto = props.produto || []

    return (
    <>
    <h1>Produto {produto.id} </h1>
    {
        <div>
        <h2> {produto.nome} R${produto.preco}</h2>
        <Link to="/">Voltar para home</Link>
        </div>
    }
    </>
    )
}