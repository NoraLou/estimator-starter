import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'



const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)

export default Main


  





