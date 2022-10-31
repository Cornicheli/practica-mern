import './index.css'
import NombreFoto from './components/NombreFoto'
import CampoConArray from './components/CampoConArray'
import Flechita from './components/Flechita'
import data from './data/datosMentores'
import { useState } from 'react' //desestructurando react para traer unicamente useState
import React from 'react'

function App() {

  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  //modificamos estados para modificar el DOM sin necesidad de recargar la pagina
  //primer elemento: la variable que se quiere cambiar
  //segundo elemento: la funcion que va a modificar esa variable
  //y adentro del paréntesis el estado inicial de esa variable
    //mostrarOcultar es un booleano que va a mostrar/ocultar elementos del DOM
    //setMostrarOcutarl es una función que cambia el valor del booleano (de true a false y al reves)
    //false es el estado inicial


  let [numeroAcambiar,setNumeroAcambiar] = useState(0)
  //el hook de estado está compuesto por dos elementos
    //primer elemento es la variable que tiene que cambiar
    //segundo elemento es la función que va a modificar/setear esa variable
    //es necesario PRE-DEFINIR con que valor INICIA el estado (adentro del parentesis del hook de estado)
    
    let hide = () => {
      setMostrarOcultar(!mostrarOcultar)
      console.log(mostrarOcultar)
    }

    let next = () => {
    if (numeroAcambiar<data.length-1) {
      setNumeroAcambiar(++numeroAcambiar)
    } else {
      setNumeroAcambiar(0)
    }
    console.log(numeroAcambiar)
  }
  let prev = () => {
    if (numeroAcambiar>0) {
      setNumeroAcambiar(--numeroAcambiar)
    } else {
      setNumeroAcambiar(data.length-1)
    }
    console.log(numeroAcambiar)
  }

  return (
    <div className='card black'>
      <NombreFoto nombre={data[numeroAcambiar].nombre} foto={data[numeroAcambiar].foto} />
      {/* vamos a armar un condicional que dependa del booleano del evento */}
      {
        mostrarOcultar ?
          (<>
            <p className='gray flex j-center a-center' onClick={hide}>ocultar info</p>
            <div className='edad-fecha'>
              <p className='datos white r25 edad'>Edad: {data[numeroAcambiar].edad} años</p>
              <p className='datos white l25 fecha'>Fecha: {data[numeroAcambiar].nacimiento}</p>
            </div>
            <div className='datos white flex a-center'>
              <p>Mail: {data[numeroAcambiar].mail}</p>
            </div>
            <CampoConArray titulo='Hobbies' datos={data[numeroAcambiar].hobbies.join(' y ')} />
            <CampoConArray titulo='Comidas' datos={data[numeroAcambiar].comidas.join(' y ')} />
          </>) :
          (<p className='gray flex j-center a-center' onClick={hide}>mostrar info</p>)
      }
      <div className='flex j-center a-center'>
        <Flechita verbo='anterior' estilo='r25' pepe={prev} />
        <Flechita verbo='siguiente' estilo='l25' pepe={next} />
        {/* los eventos en los componentes se pasan como propiedades/metodos NO COMO EVENTOS */}
        {/* por eso es necesario desestructurlo adentro del componente */}
        {/* y acplicarlo en la etiqueta HTML que corresponda */}
      </div>
    </div>
  )
}

export default App