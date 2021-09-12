import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note/Note'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('/api/notes')
      .then(({ data: notes }) => setNotes(notes))
      .catch(err => console.error(err))
  }, [])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const filteredNotes = notes.filter(({ title, body }) => {
    const fixedSearch = searchTerm.toLowerCase()

    return searchTerm !== ''
      ? title.toLowerCase().includes(fixedSearch) ||
          body.toLowerCase().includes(fixedSearch)
      : true
  })

  const notesMapped = filteredNotes.map(noteDetails => (
    <Note key={noteDetails.id} noteDetails={noteDetails} />
  ))

  return (
    <div>
      <label>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div>{notesMapped}</div>
      </label>
    </div>
  )
}

export default Notes
