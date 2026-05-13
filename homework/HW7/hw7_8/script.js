class Cinderella{
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}

class Prince{
    constructor(name, age, shoeSize) {
        this.name = name
        this.age = age
        this.shoeSize = shoeSize
    }
}

let princesses = [
    new Cinderella('Anna', 20, 36),
    new Cinderella('Lin', 30, 38),
    new Cinderella('Sofie', 22, 37),
    new Cinderella('Amy', 17, 37.5),
    new Cinderella('Maria', 19, 38),
    new Cinderella('Jenny', 18, 40),
    new Cinderella('Ella', 19, 35),
    new Cinderella('May', 35, 39),
    new Cinderella('Gwen', 25, 41),
    new Cinderella('Mel',20 , 36.5),
]


let prince = new Prince ('Christopher', 20, 35)

let princess;

for (let i=0;i<princesses.length;i++){
    if(princesses[i].footSize===prince.shoeSize)
        princess=princesses[i];
}

console.log(princess)

/*----------------------------------------------------------------------------------*/
console.log("\nCinderella from 'find'")
console.log(princesses.find(value => value.footSize===prince.shoeSize))

