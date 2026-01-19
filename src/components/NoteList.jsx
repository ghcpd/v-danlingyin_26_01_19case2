import NoteItem from './NoteItem'
import './NoteList.css'

function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return (
      <div className="note-list-empty">
        <p>No notes yet. Create your first note above!</p>
      </div>
    )
  }

  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      <div className="notes-container">
        {notes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onDelete={onDeleteNote}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteList
