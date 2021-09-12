import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddNote from './src/components/AddNote.js/AddNote'
import App from './src/components/App/App'

export default (
  <Switch>
    <Route exact path="/" component={App}></Route>
    <Route path="/addNote" component={AddNote}></Route>
  </Switch>
)
