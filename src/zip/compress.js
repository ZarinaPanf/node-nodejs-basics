import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream,} from 'node:fs';
import { promisify } from 'node:util';
import { pipeline } from 'node:stream';

const compress = async () => {
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}
do_gzip('./files/fileToCompress.txt', 'archive.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
};

await compress();