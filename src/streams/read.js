import * as fs from 'node:fs';

const read = async () => {
    const readStream = fs.createReadStream('./files/fileToRead.txt');
    readStream.pipe(process.stdout);
};

await read();