const Note = ({noteDetails: {title, body, dateLastModified, dateCreated}}) => {
    const lastModifiedDate = new Date(dateLastModified)
    const lastModifiedFormatted = lastModifiedDate.toLocaleString("en-US", {dateStyle: "long", timeStyle: "medium"})

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <time dateTime={dateLastModified}>{lastModifiedFormatted}</time>
        </div>
    )
}

export default Note