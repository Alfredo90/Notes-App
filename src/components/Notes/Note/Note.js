import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg'

const Note = ({ noteDetails: { title, body, dateLastModified, dateCreated } }) => {
  const lastModifiedDate = new Date(dateLastModified)
  const lastModifiedFormatted = lastModifiedDate.toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  })

  const bodyTextFormatted = body.length > 70 ? body.replace(/(^.{60})(.+$)/gi, '$1...') : body

  return (
    <div className="pb-10 flex flex-row items-center">
      <div className="flex flex-col">
        <h2 className="text-lg font-extrabold">{title}</h2>
        <p className="text-sm mr-18 leading-snug">{bodyTextFormatted}</p>
        <time dateTime={dateLastModified} className="text-xs font-thin">
          {lastModifiedFormatted}
        </time>
      </div>
      <Arrow className="h-14 w-20" />
    </div>
  )
}

export default Note
