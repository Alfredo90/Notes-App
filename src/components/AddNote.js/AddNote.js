import React, { useState } from 'react'
// import { AiFillCheckCircle } from 'react-icons/ai'

const AddNote = () => {
  const [textarea, setTextarea] = useState('')
  const [input, setInput] = useState('')

  const handleInput = e => {
    e.target.localName === 'input' ? setInput(e.target.value) : setTextarea(e.target.value)
    console.log(e.target.localName)
  }

  const submit = e => {
    e.preventDefault()
  }

  return (
    <div className="new-note">
      <form onSubmit={submit}>
        <input type="text" placeholder="Title..." value={input} onChange={handleInput}  />
        <textarea placeholder="Type text ..." value={textarea} onChange={handleInput} />
        <button type="button">
          Save
        </button>
      </form>
    </div>
  )
}

export default AddNote
