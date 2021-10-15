import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ReactComponent as LeftArrow} from '../../assets/images/leftarrow.svg'
import { ReactComponent as OptionIcon} from '../../assets/images/options.svg'




const AddNote = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()

  const handleChange = e => {
    e.target.localName === 'input' ? setTitle(e.target.value) : setBody(e.target.value)
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
    <form className="font-proxima-nova bg-blurry-shapes bg-local bg-cover bg-white w-100vw h-100vh " onSubmit={submitForm}>
      <div className="flex flex-row justify-between items-center border-2 border-white-100 bg-white bg-opacity-25 ">
        <button  type="submit">
          <LeftArrow className="h-24 w-24  " />
        </button>
        <button>
          <OptionIcon className="h-24 w-24 " />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center m-20  "> 
        <input className="w-335 rounded-5 border bg-white bg-opacity-25 backdrop-filter backdrop-blur-md bg-gradient-to-tl from-test2 to-test   " value={title} onChange={handleChange} type="text" placeholder="Title..." />
        <textarea className="w-335 h-574 m-56 rounded-5 border bg-white bg-opacity-25 backdrop-filter backdrop-blur-md bg-gradient-to-tl from-test2 to-test " value={body} onChange={handleChange} placeholder="Type text ..." />
      </div>
    </form>
  )
}

export default AddNote
