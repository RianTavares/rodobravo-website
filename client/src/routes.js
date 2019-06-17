import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Rodobravo from './pages/Quem-somos';
import Rastreio from './pages/Rastreio';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Frota from './pages/Frota';


const Routes = () => (
    <div>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rodobravo' component={Rodobravo}/>
        <Route exact path='/rastreio' component={Rastreio}/>
        <Route exact path='/servicos' component={Servicos}/>
        <Route exact path='/contato' component={Contato}/>
        <Route exact path='/frota' component={Frota}/>
    </Switch>
    </div>
)

export default Routes;