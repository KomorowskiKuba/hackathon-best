import { generateManySensors } from "$lib/sensorGenerator";
import { writable } from "svelte/store";
import { browser } from '$app/env'

const dataFromStorage = browser && JSON.parse(window.localStorage.getItem('sensors'))
const SensorStore = writable(dataFromStorage || generateManySensors(100))
SensorStore.subscribe(sensors => {
    if (browser) window.localStorage.setItem('sensors', JSON.stringify(sensors));
});

export default SensorStore;