import React from 'react'
import Home from './pages/Home'
import Produto from './pages/Produto'

import { Switch, Route } from 'react-router-dom'

export const Routes = () => {

    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/produto/:id" component={Produto} exact/>
            <Route component={() => <div> AQUI NÃO TEM NADA! =)</div>} />
        </Switch>
    )

}