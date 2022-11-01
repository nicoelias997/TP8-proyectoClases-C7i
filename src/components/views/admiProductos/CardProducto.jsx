import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardProducto = (props) => {
  

  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={props.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{props.nombreProducto}</Card.Title>
        <Card.Text>Precio: ${props.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link className="btn btn-danger me-2" to={`/detalle-producto/${props._id}`}>Ver más</Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;