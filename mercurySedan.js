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
loadPassenger(num){
    if (this.passanger + num <= this.maxPassenger){
        console.log("Can take all passengers");
    }
    else {
        console.log("Too many passengers");
    }
}
start(){
    if (this.fuel > 0){
        this.start = true;
        console.log ("Car is started");
    }
    else {
        console.log ("Not enough fuel");
    }
}
service(){
    if (this.milage > 30000){
        this.scheduleService = true;
    console.log ("time for maitenance");
    }
    else {
        console.log ("no maitenance needed")
    }
}
let newJaguar = new Car ("Jaguar", "Turbo XE", "2020", "Red", 20000)
let newJeep = new Car ("Jeep", "Wrangler", "Black", "2021", 40000)







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
