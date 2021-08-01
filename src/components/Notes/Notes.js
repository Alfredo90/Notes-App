import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note/Note'

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

  const notesMapped = filteredNotes.map(noteDetails => (
    <Note key={noteDetails.id} noteDetails={noteDetails} />
  ))

  const test = notesMapped.length < 1 ? <p>No results found</p> : notesMapped

  return (
    <div>
      <label htmlFor="search-bar" className="hidden">
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
        {test}
      </div>
    </div>
  )
}

export default Notes
