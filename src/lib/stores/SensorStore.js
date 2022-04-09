import { writable } from "svelte/store";

const SensorStore = writable([
    {
        name: "Jakubs's sensor #1",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        img_path: 'temperature.png',
        path: '/',
    },
    {
        name: "Jakubs's sensor #2",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        img_path: 'temperature.png',
        path: '/',
    },
    {
        name: "Sebastians's sensor #1",
        category: 'Temperature',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Sebastian Sekula',
        img_path: 'temperature.png',
        path: '/',
    },
])

export default SensorStore;