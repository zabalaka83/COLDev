import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar'
import LeftBar from "./components/LeftBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './LogIn/Login'
import Ventas from "./Ventas/Ventas"
import Roles from './Roles/Roles'
import Operario from './Operarios/Operario'
import Stock from './Stock/Stock'
import Denegado from "./components/Denegado"
import DetalleVenta from './Ventas/DetalleVenta'
import EditarUsuario from "./Roles/EditarUsuario";
import Addstock from "./Stock/Addstock";

function App() {

  const [ user, setUser ] = useState({
    Id_Empleado: 0,
    nombre: '',
    rol: 0
  });

  const [ venta, setVenta ] = useState({
    Id_Venta: 0,
    Empleado: '',
    Cliente: '',
    Estado: '',
    Total: 0,
    Productos: []
  });

  return (
    <Router>
      <TopBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Login user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/app/ventas" /* component={Ventas} */>
          <LeftBar user={user}/>
          <Ventas user={user} ventas={venta} setVenta={setVenta}/>
        </Route>
        <Route exact path="/app/editarUsuario">
          <LeftBar user={user}/>
          <EditarUsuario user={user}/>
        </Route>
        <Route exact path="/app/ventas/detalles">
          <LeftBar user={user}/>
          <DetalleVenta user={user} ventas={venta} setVenta={setVenta}/>
        </Route>
        <Route exact path="/app/roles">
          <LeftBar user={user}/>
          <Roles user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/app/operario">
          <LeftBar user={user}/>
          <Operario user={user}/>
        </Route>
        <Route exact path="/app/stock">
          <LeftBar user={user}/>
          <Stock user={user}/>
        </Route>
        <Route exact path="/app/addstock">
          <LeftBar user={user}/>
          <Addstock user={user}/>
        </Route>
        <Route exact path="/denegado">        
          <Denegado />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
