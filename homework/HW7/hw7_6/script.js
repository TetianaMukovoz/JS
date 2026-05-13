function Car(model, producer, year, maxSpeed, engineSize){
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineSize = engineSize

    this.drive = function (){
        console.log(`We're driving at ${this.maxSpeed} an hour`)
    }

    this.info = function (){
        console.log(`Model - ${this.model}` +
            `\nProducer - ${this.producer}` +
            `\nYear of production - ${this.year}`+
            `\nMax speed - ${this.maxSpeed}`+
            `\nEngine size - ${this.engineSize}`)
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed+=newSpeed;
    }

    this.changeYear = function (newValue){
        this.year = newValue;
    }

    this.addDriver = function (driver){
        this.driver = driver;
    }
}


let car1=new Car('Porsche', 'Germany', '2026', 306, 4 )
car1.info();

car1.addDriver('Leon')
console.log(car1);

car1.increaseMaxSpeed(15)
car1.drive()

car1.changeYear(2027)
console.log(car1);