class Car {
    constructor(make, model, year, mileage, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
        this.driveToWork = function() {
            console.log("old mileage " + this.mileage)
            this.mileage = this.mileage += 33;
            console.log("new mileage " + this.mileage)
        }
        this.driveAroundTheWorld = function() {
            console.log("old mileage " + this.mileage)
            this.mileage = this.mileage += 24000;
            console.log("new mileage " + this.mileage)
        }
        this.runErrands = function () {
            console.log("old mileage " + this.mileage)
            this.mileage = this.mileage += 30;
            console.log("new mileage " + this.mileage)
        }
    
}
}

var HND = new Car('Honda', 'Integra-Type R', 2006, 124000, "Black")

console.log(HND.mileage)
HND.driveAroundTheWorld()
HND.driveToWork()
HND.runErrands()