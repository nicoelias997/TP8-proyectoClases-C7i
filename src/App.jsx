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

function App() {
  return (
    // administramos las rutas
    <BrowserRouter>
  {/* Aqui puedo poner los compnentes que quiero que aparezcan siempre */}
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrar"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
         <Route exact path="/detalle-producto/:id" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App