class StressRequest {
  constructor(jsonString) {
    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Invalid JSON in request file: ${error.message}`);
    }
    const { path, verb, data, headers } = parsed;
    if (!path || typeof path !== 'string') {
      throw new Error('Request file missing valid property: path');
    }
    if (!verb || typeof verb !== 'string') {
      throw new Error('Request file missing valid property: verb');
    }
    if (data === undefined || typeof data !== 'object' || data === null) {
      throw new Error('Request file missing valid property: data');
    }
    if (headers === undefined || typeof headers !== 'object' || headers === null) {
      throw new Error('Request file missing valid property: headers');
    }
    this.path = path;
    this.verb = verb.toLowerCase();
    this.data = data;
    this.headers = headers;
  }
}

export default StressRequest;
