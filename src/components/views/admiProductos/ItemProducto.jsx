import { Button } from "react-bootstrap";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ItemProducto = (props) => {
  // const {id, nombreProducto, categoria, imagen, precio} = {...producto}
  const borrarProducto = () => {
    borrarProductoAPI(props.id).then((respuesta) => {
      if(respuesta.status === 200){
        Swal.fire({
          title: 'Estas seguro?',
          text: "Este proceso sera irreversible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'Tu producto fue eliminado.',
              'success'
            )
            consultarAPI().then((respuesta) => {
              props.setProductos(respuesta)
            })
          }
        })
      }
    })
  }
  return (
    <tr>
      <td>{props.id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>{props.nombreProducto}</td>
      <td>${props.precio}</td>
      <td>{props.imagen}</td>
      <td>{props.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${props.id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;