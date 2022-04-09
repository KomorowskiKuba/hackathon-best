import { writable } from "svelte/store";

const SensorStore = writable([
    {
        name: "Jakubs's sensor #1",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        img_path: 'temperature.png',
        x: 100,
        y: 200,
        path: '/',
    },
    {
        name: "Jakubs's sensor #2",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        img_path: 'temperature.png',
        x: 200,
        y: 50,
        path: '/',
    },
    {
        name: "Sebastians's sensor #1",
        category: 'Temperature',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Sebastian Sekula',
        img_path: 'temperature.png',
        x: 300,
        y: 300,
        path: '/',
    },
])

export default SensorStore;