import { writable } from "svelte/store";

const SensorStore = writable([
    {
        name: "Mark's sensor #1",
        type: 'Smog',
        img_path: 'temperature.png',
        path: '/',
    },
    {
        name: "kkkk",
        type: 'Smog',
        img_path: 'temperature.png',
        path: '/',
    },
    {
        name: "Mark's sensor #2",
        type: 'Smog',
        img_path: 'temperature.png',
        path: '/',
    },
])

export default SensorStore;