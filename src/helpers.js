import { promises as fs } from 'fs';

export const loadArgs = () => {
  const args = process.argv.slice(2);
  let url, reqFile, configFile;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-u' && args[i + 1]) {
      url = args[++i];
    } else if (args[i] === '-r' && args[i + 1]) {
      reqFile = args[++i];
    } else if (args[i] === '-c' && args[i + 1]) {
      configFile = args[++i];
    }
  }
  if (!url || !reqFile || !configFile) {
    throw new Error('Usage: node index.js -u <URL> -r <request.json> -c <config.json>');
  }
  return { url, reqFile, configFile };
};

export const loadFile = async (filename) => {
  try {
    const content = await fs.readFile(filename, 'utf8');
    return content;
  } catch (error) {
    throw new Error(`Error reading file ${filename}: ${error.message}`);
  }
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

