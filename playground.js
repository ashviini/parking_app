console.log(
  [
    { id: 1, vehicleTypeId: 1, lowerHourLimit: 0, upperHourLimit: 2, rate: 20 },
    { id: 2, vehicleTypeId: 1, lowerHourLimit: 2, upperHourLimit: 4, rate: 40 },
    {
      id: 3,
      vehicleTypeId: 1,
      lowerHourLimit: 4,
      upperHourLimit: 24,
      rate: 60,
    },
    { id: 4, vehicleTypeId: 2, lowerHourLimit: 0, upperHourLimit: 2, rate: 30 },
    { id: 5, vehicleTypeId: 2, lowerHourLimit: 2, upperHourLimit: 4, rate: 50 },
    {
      id: 6,
      vehicleTypeId: 2,
      lowerHourLimit: 4,
      upperHourLimit: 24,
      rate: 80,
    },
    { id: 7, vehicleTypeId: 3, lowerHourLimit: 0, upperHourLimit: 2, rate: 50 },
    {
      id: 8,
      vehicleTypeId: 3,
      lowerHourLimit: 2,
      upperHourLimit: 4,
      rate: 100,
    },
    {
      id: 9,
      vehicleTypeId: 3,
      lowerHourLimit: 4,
      upperHourLimit: 24,
      rate: 200,
    },
  ].sort((a, b) => {
    return a.lowerHourLimit - b.lowerHourLimit;
  })
);
