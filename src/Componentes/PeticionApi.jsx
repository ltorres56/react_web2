import React from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [Paginacion, setPaginacion] = React.useState(1)
  
  const ObtenerPersonajes = async () => {
    try{
        
     const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${Paginacion}`)
     const {results} = await res.json()
     setPersonajes(results)
     //console.log(results)
    
    }catch(error){
        console.log(error)
   }
  }
  const siguientePagina = async () =>{
      await setPaginacion (Paginacion + 1);
      ObtenerPersonajes();

  }
  const PaginaAnterior = async () =>{
    await setPaginacion (Paginacion - 1);
    ObtenerPersonajes();
   
}
    return (
    <div>
     <h1 align="center"> Personajes de RICK AND MORTY y algunas caracteristicas </h1>
   
     <button onClick={ObtenerPersonajes}>Desplegar Personajes</button>
     <div></div>
     <button onClick={PaginaAnterior}>Pagina Anterior</button>
     <div></div>
     <button onClick={siguientePagina}>Siguiente Pagina</button>
     {
        personajes.map(({id, name, image, species, gender, status}) => (
            <div key = {id}>
            <h4 key = {id}>{id} - {name} - {species} - {gender} - {status}</h4>
            <img src={image} alt={name} />
            
           </div>    
        ))
        }
    </div>
  )
}

export default PeticionApi

