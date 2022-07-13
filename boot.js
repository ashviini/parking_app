const db = require("./db");
const seeds = require("./seed");

function populateInitials() {
  db.ParkingLot.insert(seeds.parkingLots);
  db.VehicleTypes.insert(seeds.vehicleTypes);
  db.ParkingRates.insert(seeds.parkingRates);
}

populateInitials();
