import React from 'react'

export default function CampoConArray(props) {
    console.log(props)
    let {titulo,datos} = props //saco las propiedades titulo y datos del objeto props
    //let {titulo} = props //saco las propiedades titulo del objeto props
    //let {datos} = props //saco las propiedades datos del objeto props
    return (
        <div className='datos white flex a-center'>
            <p>{titulo}: {datos}</p>
        </div>
    )
}


/*
<div className='datos white flex a-center'>
    <p>Comidas: lasaña y hamburguesa</p>
</div>
*/