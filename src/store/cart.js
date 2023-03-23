// Utilities
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cartitems: useStorage('cart',[])
    }),
    getters: {
        getAllCartItems: (state) =>{
            return state.cartitems
        }
    },
    actions:{
        addItemToCart(item){
            this.cartitems.push(item)
        }
    }
})