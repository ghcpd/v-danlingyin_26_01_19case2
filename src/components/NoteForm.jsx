import { useState } from 'react'
import './NoteForm.css'

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content')
      return
    }

    onAddNote(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Create New Note</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter note content..."
          rows="4"
        />
      </div>
      <button type="submit" className="btn-submit">Add Note</button>
    </form>
  )
}

export default NoteForm
