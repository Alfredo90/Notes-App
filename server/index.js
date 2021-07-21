require("dotenv").config()
const express = require("express")
const { addNote, getNotes } = require("./controllers/noteController")
const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env
app.use(express.json())

app.get("/api/notes", getNotes)
app.post("/api/notes", addNote)


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`))