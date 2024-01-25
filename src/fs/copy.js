import fs from 'node:fs';

const copy = async () => {
  fs.cp('./files', './files_copy', { recursive: true }, (err) => {
    if (err) {
      console.error('FS operation failed');
    }
  });
};

await copy();
