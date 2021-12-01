import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import ItemProduto from '../components/ItemProduto'

export default function Produto() {

        const { id } = useParams()
        const [produto, setProduto] = useState({})
        
    useEffect(()=> {
        axios.get(`http://localhost:3001/produtos/${id}`) // Para concatenar com $, usar o acento grave
        .then((response) => {
        setProduto(response.data)
        })
    }, [])

    return (
        <ItemProduto produto={produto}/>
    )
}