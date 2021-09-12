let id = 6
const notesData = [
  {
    id: 1,
    title: 'Notes App',
    body: 'This is our Notes App Concept design. It is still a work in progress, but we are working on making it cool and functional, as well as a beautiful UI',
    dateLastModified: '2021-07-12T16:18:08-06:00',
    dateCreated: '2021-07-12T09:18:06-06:00'
  },
  {
    id: 2,
    title: 'Refactoring Code',
    body: 'nextLevel and currentValue both use the currentIndex. YOU WERE WORKING ON THE STATE MANAGEMENT',
    dateLastModified: '2021-07-12T09:18:06-06:00',
    dateCreated: '2021-07-06T11:29:17-06:00'
  },
  {
    id: 3,
    title: 'Notes App',
    body: 'This is our Notes App Concept design. It is still a work in progress, but we are working on making it cool and functional, as well as a beautiful UI',
    dateLastModified: '2021-07-12T16:18:08-06:00',
    dateCreated: '2021-07-12T09:18:06-06:00'
  },
  {
    id: 4,
    title: 'Refactoring Code',
    body: 'nextLevel and currentValue both use the currentIndex. YOU WERE WORKING ON THE STATE MANAGEMENT',
    dateLastModified: '2021-07-12T09:18:06-06:00',
    dateCreated: '2021-07-06T11:29:17-06:00'
  },
  {
    id: 5,
    title: 'Notes App',
    body: 'This is our Notes App Concept design. It is still a work in progress, but we are working on making it cool and functional, as well as a beautiful UI',
    dateLastModified: '2021-07-12T16:18:08-06:00',
    dateCreated: '2021-07-12T09:18:06-06:00'
  },
  {
    id: 6,
    title: 'Refactoring Code',
    body: 'nextLevel and currentValue both use the currentIndex. YOU WERE WORKING ON THE STATE MANAGEMENT',
    dateLastModified: '2021-07-12T09:18:06-06:00',
    dateCreated: '2021-07-06T11:29:17-06:00'
  }
]

module.exports = {
  getNotes: (req, res) => {
    res.status(200).send(notesData)
  },
  addNote: (req, res) => {
    id++
    req.body.id = id
    console.log(req.body)
    console.log(req)
    req.body.dateLastModified = req.body.dateCreated
    notesData.push(req.body)

    res.status(200).send(notesData)
  }
}
