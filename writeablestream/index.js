const fs = require('fs');

// Membuat writable stream ke file output.txt
const writableStream = fs.createWriteStream('output.txt');

console.log('Stream created');

// Menulis data ke dalam stream
writableStream.write('Ini merupakan teks baris pertama!\n');
console.log('First line written');

writableStream.write('Ini merupakan teks baris kedua!\n');
console.log('Second line written');

// Menutup stream dengan menambahkan data terakhir
writableStream.end('Akhir dari writable stream!', () => {
    console.log('Stream ended and file written');
});
