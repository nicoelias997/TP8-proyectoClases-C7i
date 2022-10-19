import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = () => {

  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"));
  const [userActive,  setUserActive] = useState(false)

  useEffect(() => {
    if((storageUser)){
      setUserActive(true)
    }
  })

  const navigate = useNavigate()

  const cerrarSesion = () => {
    Swal.fire({
      title: 'Estas seguro que deseas cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUserActive(false)
        localStorage.removeItem("usuarioActivo");
        navigate("/login/iniciarSesion")
      }
    })
  }

 

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        {
          userActive ? (<Navbar.Brand as={Link} to="/">
          Cafeteria
        </Navbar.Brand>) : <Navbar.Brand as={Link} to="/login/IniciarSesion">
          Cafeteria
        </Navbar.Brand>
        }
        
       {
        userActive ?  (<>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link">
              Inicio
            </NavLink>
          <NavLink to="/administrar" className="nav-item nav-link">
            Administrar
          </NavLink>
          </Nav>
        </Navbar.Collapse> </>) : null
       }
       
        <Navbar.Collapse className="justify-content-end">
        {
          userActive ? (<Link  onClick={() => cerrarSesion()} className="nav-item nav-link">Logout</Link>) :
          <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
        }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;