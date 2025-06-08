class StressConfiguration {
  constructor(jsonString) {
    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Invalid JSON in configuration file: ${error.message}`);
    }
    const { count, interval } = parsed;
    if (typeof count !== 'number') {
      throw new Error('Configuration file missing valid property: count');
    }
    if (typeof interval !== 'number') {
      throw new Error('Configuration file missing valid property: interval');
    }
    this.count = count;
    this.interval = interval;
  }
}

export default StressConfiguration;
