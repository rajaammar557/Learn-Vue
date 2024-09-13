<script setup>
import Quiz  from "@/components/Quiz/Quiz.vue";
</script>

<template>
  <main>
    <Quiz :quiz="{ name: 'My first Quiz', question: [] }" />
  </main>
</template>
