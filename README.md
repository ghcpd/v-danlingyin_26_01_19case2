# Simple Notes App

A simple, single-page note-taking application built with React and Vite. Create, view, and delete notes with an intuitive interface.

## Features

- ✨ Create notes with title and content
- 📋 Display all notes in a grid layout
- 🗑️ Delete notes with confirmation
- 💾 In-memory storage (notes are cleared on page refresh)
- 📱 Responsive design

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
```bash
cd Claude-Sonnet-4.5
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

3. The application will automatically reload when you make changes to the code

## Usage

### Creating a Note
1. Enter a title in the "Title" field
2. Enter your note content in the "Content" field
3. Click the "Add Note" button
4. Your note will appear in the notes list below

### Deleting a Note
1. Click the "×" button on any note card
2. Confirm the deletion in the popup dialog
3. The note will be removed from the list

## Project Structure

```
Claude-Sonnet-4.5/
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # Application entry point
│   ├── App.jsx            # Main app component with state management
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── components/
│       ├── NoteForm.jsx   # Note creation form component
│       ├── NoteForm.css   # Form styles
│       ├── NoteList.jsx   # Notes list container component
│       ├── NoteList.css   # List styles
│       ├── NoteItem.jsx   # Individual note card component
│       └── NoteItem.css   # Note card styles
```

## Technologies Used

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and development server
- **CSS3** - Styling

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Notes

- All notes are stored in memory only and will be lost when the page is refreshed
- The application is a single-page application with no backend or database
- Notes are displayed with the most recent at the top
- Each note shows its creation timestamp

## License

This project is open source and available for educational purposes.
