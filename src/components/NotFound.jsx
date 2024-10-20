import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-black to-purple-700 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <p className="text-xl text-white">Halaman tidak ditemukan.</p>
      <Link to="/" className="mt-4 px-4 py-2 text-white bg-purple-500 rounded">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
