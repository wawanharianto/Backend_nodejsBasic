// Mengambil penggunaan memori awal
const initialMemoryUsage = process.memoryUsage().heapUsed;

// Mengambil nama pengguna dari argumen kedua
const yourName = process.argv[2];

// Mengambil mode environment dari variabel environment
const environment = process.env.NODE_ENV;

// Looping untuk meningkatkan penggunaan memori
for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

// Mengambil penggunaan memori saat ini
const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);