const api_URL='https://thesimpsonsapi.com/api/characters'
const api_Individual='https://thesimpsonsapi.com/api/characters/1'
const cdnBase='https://cdn.thesimpsonsapi.com/500'
let personajes = []

const contenedor = document.querySelector(`#personajes-container`)

const cargarPersonajes=async()=>{
    try{
        const response= await fetch(api_URL)
        const data= await response.json()
        personajes=data.results
        mostrarPersonajes(personajes)
        }catch(error) {
            console.log("error en el fetch",error)
        }
}
const mostrarPersonajes=(lista)=>{
    contenedor.innerHTML=""
    lista.forEach(personaje=>{
        const urlImagen=`${cdnBase}${personaje.image}`
        contenedor.innerHTML+=`
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${urlImagen}" class="card-img-top" alt="${personaje.name}">
            <div class="card-body">
              <h5 class="card-title">${personaje.name}</h5>
              <p class="card-text">${personaje.occupation}</p>
              <p class="card-text">${personaje.status}</p>
              <button data-id="${personaje.id}">Ver detalle</button>
            </div>
          </div>
        </div>
        `})}
        cargarPersonajes()