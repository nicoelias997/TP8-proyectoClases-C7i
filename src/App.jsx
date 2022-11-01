import 'bootstrap/dist/css/bootstrap.min.css';  
import "../src/app.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/admiProductos/CrearProducto";
import EditarProducto from "./components/views/admiProductos/EditarProducto";
import Login from './components/views/usuario/Login';
import IniciarSesion from './components/views/usuario/IniciarSesion';


function App() {

  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"));

  const RutaPrivada = ({element: Component, authenticated}) => { //creamos esta funcion, porque reemplazaremos esta ruta, en todas las rutas que sean privadas!!
      //otra validacion seria que un user malo  no cree desde informacion desde su pc directamente al local storage
      if((storageUser)){
      return authenticated ? <Component></Component> : <Error404></Error404>
      } 
  }


  return (
    // administramos las rutas
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route  path="/" element={<RutaPrivada authenticated={true} element={Inicio}></RutaPrivada>}></Route>
        <Route
          exact
          path="/administrar"
          element={<RutaPrivada authenticated={true} element={Administrador}></RutaPrivada>}
        ></Route>
        <Route
          exact
          path="/administrar/crear"
          element={<RutaPrivada authenticated={true} element={CrearProducto}></RutaPrivada>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:_id"
          element={<RutaPrivada authenticated={true} element={EditarProducto}></RutaPrivada>}
        ></Route>
         <Route exact path="/detalle-producto/:_id" element={<RutaPrivada authenticated={true} element={DetalleProducto}></RutaPrivada>}></Route>

         <Route exact path="/login" element={<Login></Login>}></Route>
         <Route exact path="/login/iniciarSesion" element={<IniciarSesion></IniciarSesion>}></Route>


        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App