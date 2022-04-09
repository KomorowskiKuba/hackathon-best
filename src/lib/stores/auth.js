import { writable } from 'svelte/store'
import { browser } from "$app/env";

export const user = writable(browser && JSON.parse(window.localStorage.getItem('user')))
user.subscribe(user => browser && window.localStorage.setItem('user', JSON.stringify(user)))