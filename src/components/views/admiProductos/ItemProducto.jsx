import { Button } from "react-bootstrap";

const ItemProducto = (props) => {
  // const {id, nombreProducto, categoria, imagen, precio} = {...producto}

  return (
    <tr>
      <td>{props.id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>{props.nombreProducto}</td>
      <td>${props.precio}</td>
      <td>{props.imagen}</td>
      <td>{props.categoria}</td>
      <td>
        <Button variant="warning">
          Editar
        </Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;