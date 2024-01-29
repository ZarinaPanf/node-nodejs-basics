import{ Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

if (isMainThread) {
    // Main thread code
    const worker = new Worker(__filename);

    worker.on('message', (result) => {
        console.log(`Fibonacci number: ${result}`);
        worker.terminate();
    });

    worker.on('error', (err) => {
        console.error(err);
        worker.terminate();
    });

    // Send the number for which Fibonacci should be calculated
    worker.postMessage(10);

} else {
    // Worker thread code
    const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

    parentPort.on('message', (n) => {
        const result = nthFibonacci(n);
        sendResult(result);
    });

    const sendResult = (result) => {
        parentPort.postMessage(result);
    };
}
