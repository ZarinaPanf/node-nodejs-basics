const parseArgs = () => {
    const envVariables = process.env;
    const envVariablesKeys = Object.keys(envVariables);
    const newEnvVarKeys = envVariablesKeys.map(key => key.replace(/^--/, ''));
    const filteredVariables = newEnvVarKeys.map(key => `${key} is ${envVariables[key]}`).join(', ');
    console.log(filteredVariables);
};

parseArgs();