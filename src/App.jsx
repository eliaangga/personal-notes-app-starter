import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import AddNote from './components/AddNote';
import ArchivedNotes from './components/ArchivedNoted'; 
import NotFound from './components/NotFound';
import Footer from './components/Footer'; 

const initialNotes = [
  // notes awal
];

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleAdd = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleArchive = (id) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);
  };

  const handleUnarchive = (id) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-black to-purple-700 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center space-y-4 p-4 sm:p-8">
          <h1 className="text-4xl font-bold text-white">Personal Notes App</h1>
          <Routes>
            <Route path="/" element={<NoteList notes={notes} onDelete={handleDelete} onArchive={handleArchive} />} />
            <Route path="/note/:id" element={<NoteDetail notes={notes} onArchive={handleArchive} />} />
            <Route path="/notes/new" element={<AddNote onAdd={handleAdd} />} />
            <Route path="/archived" element={<ArchivedNotes notes={notes} onUnarchive={handleUnarchive} />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <div className="flex space-x-4 flex-wrap">
            <Link to="/" className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition">Daftar Catatan</Link>
            <Link to="/notes/new" className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition">Tambah Catatan</Link>
            <Link to="/archived" className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition">Arsip Catatan</Link> 
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
