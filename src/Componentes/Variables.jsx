import React from 'react'

const Variables = () => {
    const saludo = "HOLA MUNDO"
    const imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShniOz4STgv7MJsM8Ep9vhehh9Aej3mejiAw&usqp=CAU'
    const texto = "Esto es una imagen"
  return (
    <div>
        <h1>{saludo}</h1>
        <img src={imagen} alt ={texto}/> 

    </div>
  )
}

export default Variables