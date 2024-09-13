<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue';
import { ref } from 'vue';

let quiz = ref('test quiz');
</script>

<template>
    <main>
        <form>
            <TabableTextarea v-model="quiz" />
        </form>
    </main>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 300px;
}
</style>
