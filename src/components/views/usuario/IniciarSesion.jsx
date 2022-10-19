import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"

const IniciarSesion = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, formState:{errors}} = useForm()

    const [usuario, setUsuario] = useState("")
    const [pass, setPass] = useState("")

    const onSubmit = (datos) => {
        console.log(datos)
    }


  return (
    <div className='mt-5 mainSection'>
    <h3 className="text-center">
        Login de acceso
    </h3>
    <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-2' >
            <Form.Control type="text" 
                placeholder='Ingrese su nombre de usuario o email' 
                {
                    ...register("usuario", {
                      required: "Debe ingresar un nombre de usuario",
                      minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres"  
                      }, 
                      maxLength: {
                        value: 30,
                        message: "El nombre no debe tener mas de 30 caracteres"
                      }
                    })}
                onChange={e => setUsuario(e.target.value)}
                value={usuario}
                />
                <Form.Text className="text-danger">{errors.usuario?.message}</Form.Text>
                </Form.Group>
                
                <Form.Group className='mb-2'>
                <Form.Control
                type='password' 
                placeholder='Ingrese un password'
                {...register("pass",{
                    required: "Debe ingresar una contraseña",
                    minLength:{
                        value: 8,
                        message: "Su contraseña debe tener al menos 8 caracteres"
                    },
                    maxLength:{
                        value: 30,
                        message: "Su contraseña debe tener como 30 caracteres como maximo"
                    }
                })}
                onChange={e => setPass(e.target.value)}
                value={pass}
                />
                <Form.Text className="text-danger mb-2">{errors.pass?.message}</Form.Text>

                </Form.Group>
                <div className='row'>

                <Button 
                className='btn btn-dark btn-lg btn-block mb-2'
                type='submit'>
                    Iniciar sesion
                </Button>
                <button 
                 className="btn btn-danger btn-sm mt-2"
                 type='button'
                 onClick={() => navigate("/login")}>   
                ¿No estas registrado?
                 </button>                           

                                
                </div>

            </Form>
        </div>
    </div>
    
</div>
)
}

export default IniciarSesion