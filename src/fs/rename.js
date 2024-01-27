import fs from 'node:fs';

const rename = async () => {
    fs.rename('./files/wrongFilename.txt', './files/properFilename.md', function(err) {
        if(err) console.error('FS operation failed');
    });
};

await rename();