const URL = process.env.REACT_APP_API_CAFE_USER


export const consultarUserAPI =  async () => {
    try{
        const respuesta = await fetch(URL)
        const listaUsuarios = await respuesta.json()
        return listaUsuarios
    } catch(e){
        console.log(e)
    }
}

export const crearUsuarioAPI =  async (usuario) => {
    try{
        const respuesta = await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

