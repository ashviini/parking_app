const express = require("express");
const app = express();
const db = require("./db");
require("./boot");

const PORT = 4040;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("OK");
});


//this endpoint will return all the :
//vehicle types allowed
//parking rates
//vehicle type supported
//parking lots availablitity.
app.get("/all", async (req, res) => {
  return res.json({
    ParkingLot: db.ParkingLot.find(),
    ParkingRates: db.ParkingRates.find(),
    VehicleTypes: db.VehicleTypes.find(),
    ParkingLogs: db.ParkingLogs.find(),
  });
});

//this endpoint will help park a vehicle
//only on the basis of parking lot id, vehicle type(if supported then only,vehicle number and area.)

app.post("/parkVehicle", async (req, res) => {
  const { lotId, vehicleTypeId, vehicleNumber, area } = req.body;

  for (const key of ["lotId", "vehicleTypeId", "vehicleNumber", "area"]) {
    if (!req.body[key])
      return res.status(400).json({ msg: `${key} is required` });
  }

  const lot = db.ParkingLot.findOne({ id: lotId });
  if (!lot) return res.status(404).json({ msg: "Incorrect lot" });

  const vehicle = db.VehicleTypes.findOne({ id: vehicleTypeId });
  if (!vehicle) return res.status(404).json({ msg: "Incorrect vehicle type" });

  if (
    !lot.availableCapacity ||
    !lot.availableCapacity[vehicleTypeId] ||
    lot.availableCapacity[vehicleTypeId] === 0
  ) {
    return res.status(400).json({ msg: "Lot is full" });
  }

  lot.availableCapacity[vehicleTypeId]--;
  db.ParkingLot.update(lot);

  const currentMs = Date.now();
  db.ParkingLogs.insert({
    id: currentMs,
    lotId: lotId,
    vehicleTypeId: vehicleTypeId,
    vehicleNumber: vehicleNumber,
    durationinHours: 0,
    area: area,
    amountPaid: 0,
    logTime: new Date(),
  });

  return res.send({
    msg: "Vehicle parked successfully",
    data: { id: currentMs },
  });
});

// this is an extra endpoint which wasn't required in the assignment, but it will help to remove car from the parking, basis on the calculation of the fare.
app.post("/exitParking", async (req, res) => {
  const { parkingLogId } = req.body;

  const parkingLog = db.ParkingLogs.findOne({ id: parkingLogId });
  if (!parkingLog) return res.status(404).json({ msg: "Log not found" });

  const currentMs = new Date().getTime();
  const logTimeMs = new Date(parkingLog.logTime).getTime();
  const parkDurationInHour = (currentMs - logTimeMs) / (1000 * 60 * 60);

  const applicableRate = db.ParkingRates.find({
    vehicleTypeId: parkingLog.vehicleTypeId,
  }).filter(
    (elem) =>
      elem.lowerHourLimit <= parkDurationInHour &&
      elem.upperHourLimit > parkDurationInHour
  )[0];

  parkingLog.amountPaid = applicableRate.rate;
  parkingLog.durationInHours = parkDurationInHour;
  parkingLog.exitTs = new Date();
  db.ParkingLogs.update(parkingLog);

  return res.send({
    msg: "Exit success",
    data: {
      amount: applicableRate.rate,
      durationInHours: parkDurationInHour,
    },
  });
});

//This will return the parking info of a particular car, just pass the car registration number in params.
app.get("/parkInfo/:vehicleNumber", async (req, res) => {
  const logs = db.ParkingLogs.find({ vehicleNumber: req.params.vehicleNumber });
  return res.json({ msg: "success", data: logs });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
