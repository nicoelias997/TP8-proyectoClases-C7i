const URL = process.env.REACT_APP_API_CAFE
// Node.js es el encargado de llamar a la variable de entorno, Node tiene programado un objeto PROCESS y DEFAULT_MIN_BREAKPOINT, tiene una prop env, donde puede acceder a ellas
export const consultarAPI =  async () => {
    try{
        const respuesta = await fetch(URL)
        const listaProductos = await respuesta.json()
        return listaProductos
    } catch(e){
        console.log(e)
    }
}