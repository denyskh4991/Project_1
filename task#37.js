const car = { brand: "", model: "", color: "" };
const updatedProperties = { type: "" };

Object.assign(car, updatedProperties);

const electro = { ...car, type: "electro", maxDistance: 0 };
const common = { ...car, type: "common", gas: "", gearBox: "" };

const models = {
    tesla: { brand: "Tesla", model: "S Plaid", color: "", type: "electro", maxDistance: 850 },
    leaf: { brand: "Nissan", model: "Leaf", color: "", type: "electro", maxDistance: 270 },
    x5: { brand: "BMW", model: "X5", color: "", type: "common", gas: "Diesel", gearBox: "auto" },
    kenga: { brand: "Renault", model: "Kangoo", color: "", type: "common", gas: "Petrol", gearBox: "mechanic" }
};

for (const modelName in models) {
    const model = models[modelName];
    console.log(`${modelName}:`);
    Object.entries(model).forEach(([key, value]) => {
        console.log(`${key}: "${value}"`);
    });
    console.log();
}