const mapSize = { width: 1048, height: 900 };

const randInt = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
const randElement = (arr) =>
    arr[randInt(0, arr.length)];

const names = ['Radowsław', 'Jakub', 'Michał', 'Maciek', 'Sebastian'];
const lastNames = ['Kowalski', 'Sekuła', 'Komorowski', 'Smolaga'];
const categories = [
    { name: "Temperature", icon: 'thermostat' },
    { name: "Air quality", icon: 'air' },
    { name: "Noise", icon: 'volume_up' },
    { name: "Humidity", icon: 'water_drop' },
    { name: "Rain meter", icon: 'opacity' },
    { name: "UV radiation", icon: 'light_mode' },
    { name: "Wind speed", icon: 'wind_power' },
    { name: "Soil moisture", icon: 'terrain' },
];

export const generateSensor = (id) => {
    const category = randElement(categories);
    const name = randElement(names);
    return {
        id,
        name: `${name}'s sensor #${randInt(0, 10)}`,
        category: category.name,
        country: 'Poland',
        city: 'Warsaw',
        author: `${name} ${randElement(lastNames)}`,
        x: randInt(0, mapSize.width),
        y: randInt(0, mapSize.height),
        icon_name: category.icon,
        path: `/sensors/${id}`,
    }
}

export const generateManySensors = (amount) => {
    const result = [];
    for (let i = 0; i < amount; i++) {
        result.push(generateSensor(i))
    }
    return result;
}