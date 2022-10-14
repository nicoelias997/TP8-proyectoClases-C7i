import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';

function App() {
  return (
   <Router>
    <Routes>
      <Route  path="/" element={<Inicio></Inicio>}></Route>
      <Route  path="/administrar" element={<Administrador></Administrador>}></Route>
      <Route  path="/*" element={<Error404></Error404>}></Route>


    </Routes>
   </Router>
  );
}

export default App;
