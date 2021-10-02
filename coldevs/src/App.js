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

function App() {

  const [ user, setUser ] = useState({
    Id_Empleado: 1,
    nombre: 'Alejandro Caicedo',
    rol: 1
  });

  return (
    <Router>
      <TopBar user={user}/>
      <Switch>
        <Route exact path="/login">
          <Login user={user}/>
        </Route>
        <Route exact path="/app/ventas">
          <LeftBar user={user}/>
          <Ventas user={user}/>
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
        <Route exact path="/denegado">        
          <Denegado />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
