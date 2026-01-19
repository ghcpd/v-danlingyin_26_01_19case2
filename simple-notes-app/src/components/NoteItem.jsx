function NoteItem({ note, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item-header">
        <h3>{note.title}</h3>
        <button className="btn-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
      <p className="note-item-content">{note.content}</p>
    </div>
  )
}

export default NoteItem
