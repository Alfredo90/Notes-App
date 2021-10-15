import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note/Note'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/images/addIcon.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/searchIcon.svg'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('/api/notes')
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
    <div className="font-proxima-nova bg-blurry-shapes bg-local bg-cover bg-white w-100vw h-100vh ">
      <label htmlFor="search-bar" className="hidden " aria-label="hidden">
        Search Bar
      </label>
      <div className="flex items-center justify-center">
        <input
          id="search-bar"
          type="search"
          value={search}
          onChange={searchHandler}
          placeholder="Search..."
        />
        <button class="flex items-center justify-center px-4 border-none bg-white h-24">
           <SearchIcon className="h-14 w-14"/>
        </button>
      </div>
      <div className="m-40 p-16 rounded-20 border border-white border-opacity-25 bg-gradient-to-tl from-test2 to-test flex flex-col backdrop-filter backdrop-blur-md">
        {filteredNotes.length < 1 ? (
          <p>No results found</p>
        ) : (
          filteredNotes.map(noteDetails => <Note key={noteDetails.id} noteDetails={noteDetails} />)
        )}
      </div>
      <div className="flex items-center justify-end mr-40 ">
        <Link to="/addNote">
          <AddIcon className="h-32 w-40" />
        </Link>
      </div>
    </div>
  )
}

export default Notes
