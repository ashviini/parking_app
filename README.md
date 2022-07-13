Instructions to run the code:

- Make sure nodejs and npm are installed.
- Run `npm install` in project directory.
- Run `npm start` to run the project.

Endpoints available:

- Make a parking
```shell
curl --location --request POST 'http://localhost:4040/parkVehicle' \
--header 'Content-Type: application/json' \
--data-raw '{
    "lotId": 2,
    "vehicleTypeId": 1,
    "vehicleNumber": "UP12XY1234",
    "area": "Random area"
}'
 ```

 - Exit parking

```shell
curl --location --request POST 'http://localhost:4040/exitParking' \
--header 'Content-Type: application/json' \
--data-raw '{
    "parkingLogId": 1653936542059
}'
```

- Get vehicle log
  
```shell
curl --location --request GET 'http://localhost:4040/parkInfo/UP12XY1234'
```
