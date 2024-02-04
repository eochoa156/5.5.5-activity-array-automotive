//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
class Car {
    constructor (make, model, year, color, milage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.milage = milage;
    }
}
class Car extends VehicleModule{
    constructor (make, model, year,color, milage){
        super (make, model, year, color, milage);
        this.maxPassenger = 5;
        this.passeger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
