import fs from 'node:fs';
import crypto from 'crypto';

const secret = 'secretkey';

const calculateHash = async () => {
    const hmac = crypto.createHmac('sha256', secret);
    const fileStream = fs.createReadStream('./files/fileToCalculateHashFor.txt');

    for await (const chunk of fileStream) {
        hmac.update(chunk);
    }

    const fileHmac = hmac.digest('hex');
    console.log(`SHA256 HMAC of the file: ${fileHmac}`);
};

await calculateHash();