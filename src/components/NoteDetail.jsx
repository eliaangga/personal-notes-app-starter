import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteDetail = ({ notes, onArchive }) => {
  const { id } = useParams();
  const note = notes.find(note => note.id === id);

  if (!note) {
    return <p className="text-white">Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold text-white">{note.title}</h2>
      <p className="text-gray-300">Dibuat pada: {note.createdAt}</p>
      <p className="text-gray-200 mt-4">{note.body}</p>
      {!note.archived && (
        <button
          onClick={() => onArchive(note.id)}
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
        >
          Arsip
        </button>
      )}
    </div>
  );
};

// PropTypes validation
NoteDetail.propTypes = {
  notes: PropTypes.array.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteDetail;
