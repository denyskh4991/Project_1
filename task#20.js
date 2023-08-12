class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Apartment {
    residents = [];

    addResident(resident) {
        this.residents.push(resident);
    }

    showResidents(apartmentIndex) {
        console.log(`Residents in Apartment ${apartmentIndex + 1}:`);
        for (const resident of this.residents) {
            console.log(`Name: ${resident.name}, Age: ${resident.age}`);
        }
        console.log('\n');
    }
}

class House {
    apartments = [];

    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('Number of apartments is enough');
        }
    }
}

const person1 = new Person('John', 22);
const person2 = new Person('Anna', 31);
const person3 = new Person('Michael', 27);

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

for (let i = 0; i < house.apartments.length; i++) {
    const apartment = house.apartments[i];
    apartment.showResidents(i);
}