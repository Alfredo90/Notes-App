import { useState, useEffect } from "react"
import axios from "axios"
import Note from "../Note.js/Note"

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("/api/notes")
        .then(({data: notes}) => setNotes(notes))
        .catch(err => console.error(err))
    }, [])

    const notesMapped = notes.map(noteDetails => (
        <Note key={noteDetails.id} noteDetails={noteDetails}/>
    ))

    return (
        <div>
            <h1>My Notes App</h1>
            {notesMapped}
        </div>
    )
}

export default Notes
