import React from 'react'

export default function Flechita(props) {
    //a través de las llaves: desestructuro
    console.log(props)
    let {verbo} = props //saco la propidad verbo del objeto props
    let {estilo} = props
    let {pepe} = props
    return (
        <div className={`gray flecha ${estilo} flex j-center a-center`} onClick={pepe}> {verbo} </div>
    )
}
