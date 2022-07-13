const loki = require("lokijs");

const db = new loki("sandbox.db");
exports.ParkingLot = db.addCollection("parking_lots");
exports.ParkingRates = db.addCollection("parking_rates");
exports.VehicleTypes = db.addCollection("vehicle_types");
exports.ParkingLogs = db.addCollection("parking_logs");

/*
parking_logs
{
    id: 
    lotId:
    vehicleTypeId:
    vehicleNumber:
    durationinHours:
    Area:
    AmountPaid:
    logTime
    exitTime: 
}


*/


