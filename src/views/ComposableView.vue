<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue';
import { ref } from 'vue';

let comment = ref('test comment');
</script>

<template>
  <main>
    <form>
      <TabableTextarea v-model="comment" />
    </form>
  </main>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 300px;
}
</style>
