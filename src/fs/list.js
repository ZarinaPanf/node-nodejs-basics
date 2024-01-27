import fs from 'node:fs';

const list = async () => {
   const dirName = './files';
   const filenames = fs.readdirSync(dirName);
   filenames.forEach((file) => {
    console.log(file);
   });
    if(!dirName) console.error('FS operation failed');
};

await list();