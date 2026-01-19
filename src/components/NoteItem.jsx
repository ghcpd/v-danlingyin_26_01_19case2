import './NoteItem.css'

function NoteItem({ note, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete(note.id)
    }
  }

  return (
    <div className="note-item">
      <div className="note-header">
        <h3>{note.title}</h3>
        <button 
          className="btn-delete" 
          onClick={handleDelete}
          aria-label="Delete note"
        >
          ×
        </button>
      </div>
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">{note.createdAt}</span>
      </div>
    </div>
  )
}

export default NoteItem
