class Man {
    name = ['John', 'Michael', 'Bobb'];
    age = [17, 18, 20];

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand = ['Toyota', 'Nissan', 'Mercedes'];
    model = ['Supra', 'Skyline', 'Vito'];
    year = [1986, 2002, 2001];
    plate = ['АА1234ВА', 'АА0000ВА', 'АІ0434ВН'];

    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
    }

    addAnswerVariant(brand) {
        this.brand.push(brand);
        return brand;
    }
}

const man = new Man(['John', 'Michael', 'Bobb'], [17, 18, 20]);
console.log('Man:', man);

const car = new Car(
    ['Toyota', 'Nissan', 'Mercedes'],
    ['Supra', 'Skyline', 'Vito'],
    [1986, 2002, 2001],
    ['АА1234ВА', 'АА0000ВА', 'АІ0434ВН']
);
console.log('Car:', car);

