
import { MdDeleteForever } from 'react-icons/md'
import React from 'react'

const Note = ({noteDetails:{title, body, dateLastModified, dateCreated}}) => {
    const lastModifiedDate = new Date(dateLastModified)
    const lastModifiedFormatted = lastModifiedDate.toLocaleString("en-US", {dateStyle: "long", timeStyle: "medium"})

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <div>
                <time dateTime={lastModifiedFormatted}>{lastModifiedFormatted}</time>
                <MdDeleteForever className='delete-icon'/>
            </div>
        </div>
    )
}

export default Note

                 
