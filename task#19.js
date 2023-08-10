class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
    }

    assignOwner(owner) {
        this.owner = owner;
        if (this.owner.age > 18) {
            console.log(`Owner ${this.owner.name} is old enough.`);
            this.displayOwnerInfo();
        } else {
            console.log(`Owner ${this.owner.name} is not old enough.`);
        }
    }

    displayOwnerInfo() {
        console.log(`Owner: ${this.owner.name}, Age: ${this.owner.age}`);
    }

    displayCarAndOwnerInfo() {
        console.log(`Car: ${this.brand}, ${this.model}, ${this.year}, ${this.plate}`);
        if (this.owner) {
            console.log(`Owner: ${this.owner.name}, Age: ${this.owner.age}`);
        } else {
            console.log("No owner assigned yet.");
        }
    }
}

const man1 = new Man('John', 17);
const man2 = new Man('Michael', 18);
const man3 = new Man('Bobb', 20);

const car1 = new Car('Toyota', 'Supra', 1986, 'АА1234ВА');
const car2 = new Car('Nissan', 'Skyline', 2002, 'АА0000ВА');
const car3 = new Car('Mercedes', 'Vito', 2001, 'АІ0434ВН');

console.log('Car 1:', car1);
console.log('Car 2:', car2);
console.log('Car 3:', car3);

car1.assignOwner(man1);
car2.assignOwner(man2);
car3.assignOwner(man3);
car1.displayCarAndOwnerInfo();
car2.displayCarAndOwnerInfo();
car3.displayCarAndOwnerInfo();

