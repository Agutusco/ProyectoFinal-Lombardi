import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"
import { db } from '../../services/firebase/config'
import { collection, doc, query, updateDoc, onSnapshot, where, getDocs } from "firebase/firestore";

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
            
        }
    }


    
return (
    <>
    <div className='contador'>
    <button onClick={ decrementar }>-</button>
    <p>{contador}</p>
    <button onClick={ incrementar }>+</button>
    </div>
    <button className='boton-agregar' onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
    </>
)
}

export default ItemCount