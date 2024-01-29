import { Worker, isMainThread, parentPort } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const performCalculations = async () => {
    if (isMainThread) {
        const numCPUs = os.cpus().length;
        const workers = [];
        const results = [];

        for (let i = 0; i < numCPUs; i++) {
            const worker = new Worker(__filename, { workerData: 10 + i });

            workers.push(worker);

            worker.on('message', (result) => {
                results.push({ status: 'resolved', data: result });

                if (results.length === numCPUs) {
                    console.log('All workers finished:', results);
                }
            });

            worker.on('error', (err) => {
                results.push({ status: 'error', data: null });

                if (results.length === numCPUs) {
                    console.log('All workers finished:', results);
                }
            });

            worker.on('exit', (code) => {
                if (code !== 0)
                    console.log(`Worker stopped with exit code ${code}`);
            });
        }
    } else {
        const { workerData } = require('worker_threads');
        parentPort.postMessage(workerData);
    }
};

await performCalculations();