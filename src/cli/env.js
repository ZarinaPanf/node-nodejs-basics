
const parseEnv = () => {
    const envVariables = process.env;
    const envVariablesKeys = Object.keys(envVariables);
    const filteredVariables = envVariablesKeys
          .filter(key => key.startsWith('RSS_'))
          .map(key => `${key}=${envVariables[key]}`)
          .join('; ');
    console.log(filteredVariables);
}

parseEnv();