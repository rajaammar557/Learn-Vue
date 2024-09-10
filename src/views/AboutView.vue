<script setup>

import { useFlash } from '@/composables/useFlash.js';

let { flash } = useFlash();

</script>

<template>
  <p>
    <button @click="flash('Its Work on About page')">Click me</button>
  </p>
</template>