import { writable } from "svelte/store";

const SensorStore = writable([
    {
        name: "Jakubs's sensor #1",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        icon_name: 'air',
        path: '/',
    },
    {
        name: "Jakubs's sensor #2",
        category: 'Smog',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Jakub Smolaga',
        icon_name: 'air',
        path: '/',
    },
    {
        name: "Sebastians's sensor #1",
        category: 'Temperature',
        country: 'Poland',
        city: 'Warsaw',
        author: 'Sebastian Sekula',
        icon_name: 'thermostat',
        path: '/',
    },
])

export default SensorStore;