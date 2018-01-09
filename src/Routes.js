import React from 'react'

import App from './containers/App'

import {Route } from 'react-router'


export const routes =(
    <div>
        <Route path='/' component={App}>
            {/*<IndexRoute component={Home} />
            <Route path='/admin' component={Admin}/>
            <Route path='/registration' component={Registration}/>
            <Route path='/about' component={About}/>
            <Route path='/for-manufacturers' component={ForManufacturers}/>
            <Route path='/for-bars' component={ForBars}/>
            <Route path='/account' component={Account}/>
            <Route path='/drinks' component={Drinks}>
                <Route path='/drinks/:drink' component={Drink}/>
            </Route>
            <Route path='/cocktails' component={Cocktails}>
                <Route path='/cocktails/:cocktail' component={Cocktail}/>
            </Route>
            <Route path='/bars' component={Bars}>
                <Route path='/bars/:bar' component={Bar}/>
            </Route>*/}
        </Route>
        {/*<Route path='*' component={NotFound} />*/}
    </div>
)