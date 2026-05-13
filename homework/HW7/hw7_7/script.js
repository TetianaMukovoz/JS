class Car{
    constructor(model, producer, year, maxSpeed, engineSize) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineSize = engineSize
    }

    drive (){
        console.log(`We're driving at ${this.maxSpeed} an hour`)
    }

    info(){
        console.log(`Model - ${this.model}` +
            `\nProducer - ${this.producer}` +
            `\nYear of production - ${this.year}`+
            `\nMax speed - ${this.maxSpeed}`+
            `\nEngine size - ${this.engineSize}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver){
        this.driver = driver;
    }

}

let car1=new Car('Porsche', 'Germany', '1996', 225, 4 )
car1.info();

car1.addDriver({name: 'Driver', age: 50})
car1.increaseMaxSpeed(15)
car1.changeYear(2025)

console.log(car1);