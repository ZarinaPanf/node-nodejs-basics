import fs from 'node:fs';
import zlib from 'node:zlib';

const decompress = async() => {
    const readStream = fs.createReadStream('archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const gunzip = zlib.createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
    writeStream.on('finish', () => {
        console.log('Decompression complete, fileToCompress.txt has been created');
    });
    readStream.on('error', (err) => console.error('Error in read stream:', err));
    gunzip.on('error', (err) => console.error('Error in gunzip stream:', err));
    writeStream.on('error', (err) => console.error('Error in write stream:', err));
};

await decompress();
