import path from 'path';
import os from 'os';
import http from 'node:http';
import unknownObjectA from './files/a.json' assert {type: 'json'};
import unknownObjectB from './files/b.json' assert {type: 'json'};
import './files/c.js';
import { fileURLToPath } from 'url';

const { release, version } = os;
const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = unknownObjectA;
} else {
    unknownObject = unknownObjectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

