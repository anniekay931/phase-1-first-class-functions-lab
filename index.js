// Code your solution in this file!
// returnFirstTwoDrivers
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

// returnLastTwoDivers
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = (drivers, SelectFunction) => SelectFunction(drivers);