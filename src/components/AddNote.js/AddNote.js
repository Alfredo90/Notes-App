import React, { useState } from 'react'
// import { AiFillCheckCircle } from 'react-icons/ai'
 const AddNote = () => {
    const [ textarea, setTextarea ] = useState('')
    const [input, setInput] = useState ('')

    const handleInput = (e) => {
        e.target.localName === "input" ? setInput(e.target.value) : setTextarea(e.target.value)
        console.log(e.target.localName)
      }

    const submit = (e) =>{
       e.preventDefault() 
    }
      
    
      return (
            <div className='new-note'>
                <form onSubmit={submit}>

                    <input
                        value={input}
                        onChange={handleInput}
                        type='text'  
                        placeholder='Title...'/>
  
            <br/>
          
                    <textarea
                        value={textarea}
                        onChange={handleInput}
                        placeholder='Type text ...'>
                    
                    </textarea>
                    <button type='button' className="save">Save</button>
                </form>

              
           
              
            </div>
      )
  }
  export default AddNote
    
    



