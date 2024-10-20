import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArchivedNotes = ({ notes, onUnarchive }) => {
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <h2 className="text-3xl font-bold text-white mb-4">Arsip Catatan</h2>
      {archivedNotes.length === 0 ? (
        <p className="text-white">Arsip kosong.</p>
      ) : (
        <ul className="space-y-4">
          {archivedNotes.map(note => (
            <li key={note.id} className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
              <Link to={`/note/${note.id}`} className="text-white">
                <h3 className="text-lg font-bold">{note.title}</h3>
                <p className="text-gray-300">{note.createdAt}</p>
              </Link>
              <button
                onClick={() => onUnarchive(note.id)}
                className="text-yellow-500 hover:text-yellow-700"
              >
                Batalkan Arsip
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// PropTypes validation
ArchivedNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ArchivedNotes;
