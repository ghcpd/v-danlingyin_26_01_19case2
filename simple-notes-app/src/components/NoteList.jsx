import NoteItem from './NoteItem'

function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="note-list">
      <h2>Notes</h2>
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet. Create your first note above!</p>
      ) : (
        <div className="notes-container">
          {notes.map(note => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={() => onDeleteNote(note.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NoteList
