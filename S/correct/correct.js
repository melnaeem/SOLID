const logMsg = require('./logger').logMsg;


class CaloriesTracker {

  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;

    if (this.currentCalories >= this.maxCalories) {
      logMsg('Max calories execded');
    }
  }
}


const tracker = new CaloriesTracker(100);

tracker.trackCalories(20);
tracker.trackCalories(20);
tracker.trackCalories(20);
tracker.trackCalories(20);
tracker.trackCalories(30);