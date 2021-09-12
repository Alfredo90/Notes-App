import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const AddNote = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()

  const handleChange = e => {
    e.target.localName === 'input'
      ? setTitle(e.target.value)
      : setBody(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    const dateCreated = new Date()
    axios
      .post('/api/notes', { title, body, dateCreated })
      .then(() => {
        history.push('/')
      })
      .catch(err => console.error(err))
  }

  return (
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
  )
}

export default AddNote
