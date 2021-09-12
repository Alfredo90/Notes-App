import AddNote from '../AddNote.js/AddNote'
import Notes from "../Notes/Notes"
import { Switch, Route } from 'react-router'


const App = () => {
  return (
  <Switch>
    <Route exact path="/"> <Notes/> </Route>
    <Route path="/addNote"> <AddNote/> </Route>
  </Switch>
  )
}

export default App
