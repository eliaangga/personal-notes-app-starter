import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteList = ({ notes, onDelete, onArchive }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  
  const [search, setSearch] = useState(initialSearch);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <h2 className="text-3xl font-bold text-white mb-4">Daftar Catatan</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Cari catatan..."
        className="mb-4 px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
      />

      {filteredNotes.length === 0 ? (
        <p className="text-white">Tidak ada catatan.</p>
      ) : (
        <ul className="space-y-4">
          {filteredNotes.map(note => (
            <li key={note.id} className="p-4 bg-gray-800 rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <Link to={`/note/${note.id}`} className="text-white w-full sm:w-auto">
                <h3 className="text-lg font-bold">{note.title}</h3>
                <p className="text-gray-300">{note.createdAt}</p>
              </Link>
              <div className="flex space-x-4 mt-2 sm:mt-0">
                <button
                  onClick={() => onArchive(note.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Arsip
                </button>
                <button
                  onClick={() => onDelete(note.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// PropTypes validation
NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
