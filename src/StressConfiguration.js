export class StressConfiguration {
  constructor(jsonString) {
    let parsed;
    try {
      parsed = JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Invalid JSON in configuration file: ${error.message}`);
    }
    const { count, interval, concurrency, logResponse, initialDelay } = parsed;
    if (typeof count !== 'number') {
      throw new Error('Configuration file missing valid property: count');
    }
    if (typeof interval !== 'number') {
      throw new Error('Configuration file missing valid property: interval');
    }
    if (concurrency && typeof concurrency !== 'number') {
      throw new Error('Configuration file invalid property: concurrency');
    }
    if (logResponse && typeof logResponse !== 'boolean') {
      throw new Error('Configuration file invalid property: logResponse');
    }
    if (initialDelay && typeof initialDelay !== 'number') {
      throw new Error('Configuration file invalid property: initialDelay');
    }
    this.count = count;
    this.interval = interval;
    this.concurrency = concurrency || 1;
    this.logResponse = logResponse || false;
    this.initialDelay = initialDelay || 0;
  }
}