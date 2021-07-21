import Notes from './components/Notes.js/Notes'
import AddNote from '../src/components/AddNote.js/AddNote'
import { SearchBar } from './components/SearchBar.js/SearchBar';
function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Notes/>
      <AddNote/>
    </div>
  )
}

export default App