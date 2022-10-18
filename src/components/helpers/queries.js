const URL = process.env.REACT_APP_API_CAFE
// Node.js es el encargado de llamar a la variable de entorno, Node tiene programado un objeto PROCESS y DEFAULT_MIN_BREAKPOINT, tiene una prop env, donde puede acceder a ellas

//^Peticion GET no me permite enviar datos a la api, solo LEERLAS
//Peticion POST // LE PEDIMOS A LA API CREAR UN PRODUCTO (generalmente en formato json()) lo vamos a usar cuando quieramos crear algo en una api o en UN LOGIN enviandole la peticion a la api
//Peticion PUT (sirve para cuando quieramos modificar la api, enviamos datos, pero para modificar)
//Peticion DELETE (borramos un producto de la api)

//Fetch nos ayudara a realizar estas peticiones, se usan estos parametros!! 


export const consultarAPI =  async () => {
    try{
        const respuesta = await fetch(URL)
        const listaProductos = await respuesta.json()
        return listaProductos
    } catch(e){
        console.log(e)
    }
}

export const crearProductoAPI =  async (producto) => {
    try{
        const respuesta = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

export const borrarProductoAPI =  async (id) => {
    try{
        const respuesta = await fetch(URL+"/"+id,{
            method: "DELETE"
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}