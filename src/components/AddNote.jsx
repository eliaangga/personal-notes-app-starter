import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: `notes-${new Date().getTime()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAdd(newNote);
    navigate('/');
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Tambah Catatan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="title">Judul:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="body">Isi Catatan:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition">Tambah Catatan</button>
      </form>
    </div>
  );
};

// PropTypes validation
AddNote.propTypes = {
  onAdd: PropTypes.func.isRequired, 
};

export default AddNote;
