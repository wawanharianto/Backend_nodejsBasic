const fs = require('fs');

// Membuat readable stream dari file article.txt
const readableStream = fs.createReadStream('./articel.txt', {
    highWaterMark: 10 // Menetapkan ukuran buffer menjadi 10 bytes
});

// Menangani event 'readable'
readableStream.on('readable', () => {
    try {
        // Membaca dan menulis chunk ke output
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // Menangani error jika chunk tidak bisa dibaca
        console.error('Error membaca chunk:', error);
    }
});

// Menangani event 'end'
readableStream.on('end', () => {
    console.log('\nDone');
});