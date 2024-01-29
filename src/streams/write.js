import fs from 'node:fs';

const write = async () => {
    const writableStream = fs.createWriteStream('fileToWrite.txt');
    console.log('Please enter some text (press Ctrl+D to end input):');
    process.stdin.pipe(writableStream);
    writableStream.on('finish', () => {
        console.log('Data has been written to fileToWrite.txt');
    });
    writableStream.on('error', (error) => {
        console.error('An error occurred:', error.message);
    });
};

await write();