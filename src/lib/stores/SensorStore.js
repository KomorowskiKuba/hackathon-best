import { generateManySensors } from "$lib/sensorGenerator";
import { writable } from "svelte/store";

const SensorStore = writable(generateManySensors(100))

export default SensorStore;