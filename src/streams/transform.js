import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const reverseTextTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    pipeline(
        process.stdin,
        reverseTextTransform,
        process.stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed:', err);
            } else {
                console.log('Pipeline completed successfully.');
            }
        }
    );
};

await transform();
