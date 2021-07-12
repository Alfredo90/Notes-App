import dummyData from "../../dummyData"
import Note from "../Note.js/Note"

const Notes = () => {

    const notesMapped = dummyData.map(noteDetails => (
        <Note key={noteDetails.id} noteDetails={noteDetails}/>
    ))

    return (
        <div>
            {notesMapped}
        </div>
    )
}

export default Notes