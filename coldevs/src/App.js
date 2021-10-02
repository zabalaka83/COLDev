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
    Id_Empleado: 0,
    nombre: '',
    rol: 0
  });

  return (
    <Router>
      <TopBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/login">
          <Login user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/app/ventas" /* component={Ventas} */>
                /* <LeftBar user={user}/>
          <Ventas user={user}/> */

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
