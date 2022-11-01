import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import ItemProducto from "./admiProductos/ItemProducto";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    );
  }, []);

  return (
    <Container className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link to="/administrar/crear" className="btn btn-primary">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
      {
        productos.map(item => 
          <ItemProducto key={item._id} _id={item._id} imagen={item.imagen} nombreProducto={item.nombreProducto} categoria={item.categoria} precio={item.precio} setProductos={setProductos}></ItemProducto>
        )
      }
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
