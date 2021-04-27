import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainUsuario from './pages/cliente/main';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/clientes" component={MainUsuario} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;
