class CaloriesTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;

    if (this.currentCalories >= this.maxCalories) {
      this.logCaloriesSurplus();
    }
  }

  logCaloriesSurplus() {
    this.logMsg('Max calories execded');
  }

  logMsg(msg) {
    console.log(msg);
  }
}


const tracker = new CaloriesTracker(100);

tracker.trackCalories(20);
tracker.trackCalories(20);
tracker.trackCalories(20);

tracker.trackCalories(40);