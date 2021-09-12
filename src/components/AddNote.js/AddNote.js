import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddNote = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isOnAddingNote, setIsOnAddingNote] = useState(false)

  const handleChange = e => {
    e.target.localName === 'input'
      ? setTitle(e.target.value)
      : setBody(e.target.value)
    console.log(e.target.localName)
  }

  const submitForm = async e => {
    e.preventDefault()
    const dateCreated = new Date()
    await axios
      .post('/api/notes', { title, body, dateCreated })
      .catch(err => console.error(err))
  }

  const addButtonClick = () => {
    setIsOnAddingNote(true)
  }

  return isOnAddingNote ? (
    <form onSubmit={submitForm}>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        placeholder="Title..."
      />
      <br />
      <textarea
        value={body}
        onChange={handleChange}
        placeholder="Type text ..."
      />
      <button type="submit" className="save">
        Save
      </button>
    </form>
  ) : (
    <Link to="/addnote">
      <button type="button" onClick={addButtonClick}>+</button>
    </Link>
  )
}

export default AddNote
