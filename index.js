import { loadArgs, loadFile, StressRequest, StressConfiguration, Stress } from './src/index.js'

const main = async () => {
  try {
    const { url, reqFile, configFile } = loadArgs();
    const requestData = await loadFile(reqFile);
    const configData = await loadFile(configFile);

    const stressRequest = new StressRequest(requestData);
    const stressConfig = new StressConfiguration(configData);

    const stress = new Stress(url, stressRequest, stressConfig);
    await stress.performTest();
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

main();
