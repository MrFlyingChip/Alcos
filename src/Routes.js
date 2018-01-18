import React from 'react'

import App from './containers/App'
import Registration from './components/Registration'
import NotFound from './components/NotFound'
import Account from './components/Account'
import About from './components/About'
import Admin from './components/Admin'
import ForManufacturers from './components/ForManufacturers'
import ForBars from './components/ForBars'
import Drinks from './components/Drinks'
import {Route } from 'react-router'


export const routes =(
    <div>
        <Route path='/' component={App}>
            {/*<IndexRoute component={Home} />*/}
            <Route path='/admin' component={Admin}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/about' component={About}/>
            <Route path='/for_manufacturers' component={ForManufacturers}/>
            <Route path='/for_bars' component={ForBars}/>
            <Route path='/account' component={Account}/>
            <Route path='/drinks' component={Drinks}/>
            {/*<Route path='/drinks/:drink' component={Drink}/>
            </Route>
            <Route path='/cocktails' component={Cocktails}>
                <Route path='/cocktails/:cocktail' component={Cocktail}/>
            </Route>
            <Route path='/bars' component={Bars}>
                <Route path='/bars/:bar' component={Bar}/>
            </Route>*/}
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)