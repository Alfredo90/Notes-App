import React from 'react'
import dummyData from '../../DummyData'
// import AddNote from '../AddNote.js/AddNote'
import Note from '../Note.js/Note'

const Notes = () => {

    const mappedNotes = dummyData.map(noteDetails => (
        <Note key={noteDetails.id} noteDetails={noteDetails}/>
    ))

    return (
        <div>
           {mappedNotes}
            {/* <AddNote/> */}
        </div>
    )
}

export default Notes
