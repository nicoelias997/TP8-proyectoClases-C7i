import { Form, Button } from "react-bootstrap";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import {useForm} from "react-hook-form"
import {useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"
import Swal from "sweetalert2";

const EditarProducto = () => {

const {register, handleSubmit, formState:{errors}, setValue} = useForm()

const {id} = useParams()
const navigate = useNavigate()

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if(respuesta.status === 200){
        console.log(respuesta)
        setValue("nombreProducto", respuesta.dato.nombreProducto)
        setValue("precio",  respuesta.dato.precio)
        setValue("imagen",  respuesta.dato.imagen)
        setValue("categoria",  respuesta.dato.categoria)
      }
    })
  }, [setValue])

  
  const onSubmit = (datos) => {
    console.log(datos)
    editarProductoAPI(id, datos).then((respuesta) => {
      if(respuesta.status === 200){
        Swal.fire("Producto editado", "El producto fue correctamente actualizdo", "success")
        navigate("/administrar")
      } else {
        Swal.fire("Ocurrio un error", "HUbo un problema, intentelo nuevamente en breve.", "error")
      }
    })
}
  

  return (
   <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" 
          {...register("nombreProducto",{
            required: "El nombre del producto es obligatorio",
            minLength: {
              value: 2,
              message: "La cantidad de caracteres minima es 2"
            },
            maxLength: {
              value: 100,
              message: "La cantidad de caracteres maxima es 100"
              }
            
  })} />
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" 
          {
            ...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 0.1,
                message: "El precio minimo de un producto es $0.1"  
              }, 
              max: {
                value: 200,
                message: "El precio maximo es de $200"
              } 
            })
          }/>
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatorio",
              pattern: {
                value:  /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una url valida"
              }
            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {...register("categoria", {
            required: "Debe seleccionar una categoria"

          })}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;