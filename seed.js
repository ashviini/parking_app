exports.parkingLots = [
  {
    id: 1,
    capacities: { 1: 5, 2: 2, 3: 2 },
    availableCapacity: { 1: 5, 2: 2, 3: 2 },
  },
  {
    id: 2,
    capacities: { 1: 8, 2: 4, 3: 3 },
    availableCapacity: { 1: 8, 2: 4, 3: 3 },
  },
  {
    id: 3,
    capacities: { 1: 6, 2: 5, 3: 5 },
    availableCapacity: { 1: 6, 2: 5, 3: 5 },
  },
];

exports.vehicleTypes = [
  { id: 1, type: "2 wheeler" },
  { id: 2, type: "hatchback" },
  { id: 3, type: "suv" },
];

exports.parkingRates = [
  { id: 1, vehicleTypeId: 1, lowerHourLimit: 0, upperHourLimit: 2, rate: 20 },
  { id: 2, vehicleTypeId: 1, lowerHourLimit: 2, upperHourLimit: 4, rate: 40 },
  { id: 3, vehicleTypeId: 1, lowerHourLimit: 4, upperHourLimit: 24, rate: 60 },
  { id: 4, vehicleTypeId: 2, lowerHourLimit: 0, upperHourLimit: 2, rate: 30 },
  { id: 5, vehicleTypeId: 2, lowerHourLimit: 2, upperHourLimit: 4, rate: 50 },
  { id: 6, vehicleTypeId: 2, lowerHourLimit: 4, upperHourLimit: 24, rate: 80 },
  { id: 7, vehicleTypeId: 3, lowerHourLimit: 0, upperHourLimit: 2, rate: 50 },
  { id: 8, vehicleTypeId: 3, lowerHourLimit: 2, upperHourLimit: 4, rate: 100 },
  { id: 9, vehicleTypeId: 3, lowerHourLimit: 4, upperHourLimit: 24, rate: 200 },
];
