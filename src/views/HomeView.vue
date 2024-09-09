<script setup>
import TheWelcome from '../components/TheWelcome.vue'

// eslint-disable-next-line no-undef
let message = $ref("Welcome There");

setTimeout(() => {
  message = 'CHANGE';
}, 3000);

</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <input type="text" name="" id="" v-model="message">
  </main>
</template>
