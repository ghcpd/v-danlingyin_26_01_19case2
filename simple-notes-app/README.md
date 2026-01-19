# Simple Notes App

A simple single-page application for creating, viewing, and deleting notes.

## Features

- **Create a note**: Add a new note with a title and content
- **Display notes**: View a list of all created notes
- **Delete a note**: Remove any note from the list

## Constraints

- Notes are stored in memory only
- No persistence after page refresh
- Single-page application (no routing)

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
   ```bash
   cd simple-notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
simple-notes-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Main App component
    ├── App.css           # Global styles
    └── components/
        ├── NoteForm.jsx  # Form for creating notes
        ├── NoteList.jsx  # List of all notes
        └── NoteItem.jsx  # Individual note display
```

## Technology Stack

- React 18
- Vite 5
- CSS (no external UI libraries)
