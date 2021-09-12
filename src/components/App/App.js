import { Switch, Route } from 'react-router-dom'
import Notes from '../Notes/Notes'
import AddNote from '../AddNote.js/AddNote'

const App = () => (
  <Switch>
    <Route exact path="/"> <Notes /> </Route>
    <Route path="/addNote"> <AddNote /> </Route>
  </Switch>
)

export default App
