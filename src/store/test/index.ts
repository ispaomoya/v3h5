import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            helloPinia: 'Hello Pinia!',
            count: 0
        }
    },
    getters: {},
    actions: {}
})