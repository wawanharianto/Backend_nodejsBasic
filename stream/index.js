const fs = require('fs');
const path = require('path');

// Menentukan path untuk input.txt dan output.txt
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// Membaca berkas input.txt menggunakan Readable Stream
const readableStream = fs.createReadStream(inputPath, {
  encoding: 'utf-8',
  highWaterMark: 15 // Menentukan ukuran chunk 15 karakter
});

// Menulis ke berkas output.txt menggunakan Writable Stream
const writableStream = fs.createWriteStream(outputPath);

readableStream.on('data', (chunk) => {
  writableStream.write(chunk + '\n');
});

readableStream.on('end', () => {
  console.log('Pembacaan selesai.');
});

readableStream.on('error', (err) => {
  console.error('Terjadi kesalahan saat membaca berkas:', err);
});

writableStream.on('error', (err) => {
  console.error('Terjadi kesalahan saat menulis berkas:', err);
});