import { appendFile } from 'node:fs';
import * as path from 'node:path';

const create = async () => {
    const folderPath = './files';
    const filePath = path.join(folderPath, 'fresh.txt');
    appendFile(filePath, 'I am fresh and young', function(err) {
        if(err) {
            console.error('FS operation failed');
        }
    });
};

await create();