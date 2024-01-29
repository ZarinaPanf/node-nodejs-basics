import fs from 'node:fs';

const remove = async () => {
    fs.unlink('./files/fileToRemove.txt', function(err) {
        if(err) console.error('FS operation failed');
    });
};

await remove();