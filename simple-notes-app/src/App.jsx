import { useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Notes App</h1>
      </header>
      <main className="app-main">
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      </main>
    </div>
  )
}

export default App
