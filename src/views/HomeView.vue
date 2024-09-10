<script setup>

import { useFlash } from '@/composables/useFlash.js';

let { flash } = useFlash();

</script>

<template>
  <main>
    <p>
      <button @click="flash('Its Work')">Click me</button>
    </p>
  </main>
</template>
