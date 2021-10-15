import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note/Note'
import { Link } from 'react-router-dom'
import {ReactComponent as AddIcon} from '../../assets/images/addIcon.svg'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('/api/notes')
      .then(({ data: notes }) => setNotes(notes))
      .catch(err => console.error(err))
  }, [])

  const searchHandler = e => setSearch(e.target.value)

  const filteredNotes = notes.filter(({ title, body }) => {
    const fixedSearch = search.toLowerCase()

    return search !== ''
      ? title.toLowerCase().includes(fixedSearch) || body.toLowerCase().includes(fixedSearch)
      : true
  })

  return (
    <div className="font-proxima-nova bg-blurry-shapes bg-local bg-cover bg-white w-100vw h-100vh">
      <label htmlFor="search-bar" className="hidden" aria-label="hidden">
        Search Bar
      </label>
      <input
        id="search-bar"
        type="search"
        value={search}
        onChange={searchHandler}
        placeholder="Search"
      />
      <div className="m-40 p-16 rounded-20 border border-white border-opacity-25 bg-gradient-to-tl from-test2 to-test flex flex-col backdrop-filter backdrop-blur-md">
        {filteredNotes.length < 1 ? (
          <p>No results found</p>
        ) : (
          filteredNotes.map(noteDetails => (
            <Note key={noteDetails.id} noteDetails={noteDetails} />
          ))
        )}
      </div>
      <Link to="/addNote"><AddIcon/></Link>
    </div>
  )
}

export default Notes
