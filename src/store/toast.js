// Utilities
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({
        toastdata: {
            showToast: false,
            message: '',
            color: 'red'
        }
    }),
})