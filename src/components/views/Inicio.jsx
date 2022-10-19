import { Container, Row } from "react-bootstrap";
import CardProducto from "./admiProductos/CardProducto";
import {useEffect, useState} from "react"
import { consultarAPI } from "../helpers/queries";
import Swal from "sweetalert2"

const Inicio = () => {
  const [productos, setProductos] = useState([])

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
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
    {
      productos.map(item => (
        <CardProducto key={item.id} imagen={item.imagen} nombreProducto={item.nombreProducto} precio={item.precio} id={item.id} ></CardProducto>
      ))
    }

      </Row>
    </Container>
  );
};

export default Inicio;