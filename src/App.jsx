import { useMemo, useState } from 'react';

const emptyForm = { title: '', content: '' };

function App() {
  const [form, setForm] = useState(emptyForm);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  const isAddDisabled = useMemo(
    () => !form.title.trim() || !form.content.trim(),
    [form.title, form.content]
  );

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isAddDisabled) {
      setError('Add a title and some content.');
      return;
    }

    const nextNote = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      content: form.content.trim(),
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [nextNote, ...prev]);
    setForm(emptyForm);
    setError('');
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Simple Notes App</p>
          <h1>Capture quick thoughts without leaving the page.</h1>
          <p className="subhead">No accounts. No storage. Everything stays in memory until you refresh.</p>
        </div>
      </header>

      <main className="layout">
        <section className="panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">Create</p>
              <h2>New note</h2>
            </div>
            <span className="hint">In-memory only</span>
          </div>
          <form className="note-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Title</span>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Meeting recap, shopping list..."
                autoComplete="off"
              />
            </label>

            <label className="field">
              <span>Content</span>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={4}
                placeholder="Write the details you need to remember."
              />
            </label>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={isAddDisabled}>
              Add note
            </button>
          </form>
        </section>

        <section className="panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">Your notes</p>
              <h2>List</h2>
            </div>
            <span className="hint">{notes.length} saved</span>
          </div>

          {notes.length === 0 ? (
            <div className="empty">
              <p>No notes yet. Add your first note to see it here.</p>
            </div>
          ) : (
            <ul className="note-list">
              {notes.map((note) => (
                <li key={note.id} className="note-card">
                  <div className="note-head">
                    <div>
                      <p className="note-title">{note.title}</p>
                      <p className="note-meta">Created {new Date(note.createdAt).toLocaleString()}</p>
                    </div>
                    <button className="ghost" type="button" onClick={() => handleDelete(note.id)}>
                      Delete
                    </button>
                  </div>
                  <p className="note-body">{note.content}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
