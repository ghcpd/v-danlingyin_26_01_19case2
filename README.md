# Simple Notes App

A single-page, in-memory notes application built with Vite + React. Create notes with a title and content, view them instantly in a list, and delete them as needed. All data is kept in memory only; refreshing the page clears everything.

## Features
- Create a note with title and content
- Display a live list of notes
- Delete a note
- In-memory storage only (no backend, no persistence)

## Tech Stack
- React 18
- Vite 5

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   Vite will print a local URL (default http://localhost:5173).
3. Build for production (optional):
   ```bash
   npm run build
   ```
4. Preview the production build (optional):
   ```bash
   npm run preview
   ```

## Notes
- There is no persistence by design; reloading the page clears all notes.
- Everything runs locally with no backend required.
