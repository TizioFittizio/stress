import axios from 'axios';
import { sleep } from './helpers';

class Stress {
  constructor(baseUrl, stressRequest, stressConfig) {
    this.baseUrl = baseUrl;
    this.request = stressRequest;
    this.config = stressConfig;
  }

  async performTest() {
    const fullUrl = `${this.baseUrl}${this.request.path}`;
    console.log(`Starting stress test on ${fullUrl} using ${this.request.verb.toUpperCase()} method.`);
    let iteration = 0;
    while (this.config.count === -1 || iteration < this.config.count) {
      iteration++;
      console.log(`Iteration ${iteration}: Sending request...`);
      try {
        const response = await axios({
          method: this.request.verb,
          url: fullUrl,
          headers: this.request.headers,
          data: this.request.data
        });
        console.log(`Iteration ${iteration}: Received status ${response.status}`);
      } catch (err) {
        console.error(`Iteration ${iteration}: Request failed with error: ${err.message}`);
      }
      await sleep(this.config.interval);
    }
    console.log('Stress test complete.');
  }
}

export default Stress;
