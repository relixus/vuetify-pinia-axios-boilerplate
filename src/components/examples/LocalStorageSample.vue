<template>
        <v-text-field 
            v-model="itemdesc"
            label="Item" 
            variant="outlined" 
            density="compact">
        </v-text-field>
        <v-btn @click="addItems">ADD</v-btn>
        <p v-for="i in cartItems">
            {{ i }}
        </p>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
import { useCartStore} from '../../store/cart'


const cart = useCartStore();
const cartItems = computed( ()=> cart.getAllCartItems )
const itemdesc = ref('')


function addItems(){
    cart.addItemToCart(itemdesc.value)
}
</script>