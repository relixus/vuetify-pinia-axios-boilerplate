<template>
<v-snackbar
      v-model="toast.toastdata.showToast"
      location="top right"
      v-bind:color="toast.toastdata.color"
    >
      {{ toast.toastdata.message }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="toast.toastdata.showToast = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script setup>
    import { useToastStore } from '../store/toast'
    const toast = useToastStore();
</script>