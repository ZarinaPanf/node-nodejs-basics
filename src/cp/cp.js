import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.on('error', (err) => {
        console.error('Failed to start child process:', err);
    });
    child.on('exit', (code, signal) => {
        if (code) {
            console.log(`Child process exited with code ${code}`);
        } else if (signal) {
            console.log(`Child process killed with signal ${signal}`);
        } else {
            console.log('Child process exited successfully');
        }
    });
};

spawnChildProcess( ['someArgument1', 'someArgument2'] );
