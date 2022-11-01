import { useEffect, useState } from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { obtenerProductoAPI } from '../helpers/queries';

const DetalleProducto = () => {

const {_id} = useParams()
const [producto, setProducto] = useState({})

    useEffect(() => {
        obtenerProductoAPI(_id).then((respuesta) => {
          if(respuesta.status === 200){
            setProducto(respuesta.dato)
          }
        })
      }, [_id])

    return (
        <Card className='container my-5 mainSection'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src={producto.imagen} alt={producto.nombreProducto} className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>{producto.nombreProducto}</h3>
                <hr/>
                <Badge bg="success">{producto.categoria}</Badge>
                <p className='mt-3'><b>Precio: ${producto.precio}</b></p>
                </Col>
            </Row>
        </Card>
    );
};

export default DetalleProducto;