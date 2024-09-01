const fs = require('fs');
const path = require('path');

// Tentukan jalur ke berkas notes.txt secara dinamis
const filePath = path.resolve(__dirname, 'noted.txt');

// TODO: Tampilkan isi dari berkas noted.txt
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
});