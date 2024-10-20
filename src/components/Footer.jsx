import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>© 2023 Your Notes App by Elia Angga. All rights reserved.</p>
            <p>Belajar Fundamental Aplikasi Web dengan React - Project Membangun Single Page Application menggunakan React</p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
};

export default Footer;