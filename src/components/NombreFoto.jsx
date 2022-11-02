import React from 'react'

export default function NombreFoto(props) {
  let {nombre,foto} = props
  return (
    <>
        <h2 className='titulo white flex j-center a-center'>{nombre}</h2>
        <img src={foto} alt='sujeto1' className='photo' />
    </>
  )
}
