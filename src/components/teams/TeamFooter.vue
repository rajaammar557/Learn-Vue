<script setup>

defineProps({
    team: Object,
})
</script>

<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center dark:bg-gray-800">
        <h5 class="font-semibold text-lg dark:text-white">{{ team.name }} - {{ team.spots }} Member Team</h5>
    </footer>
</template>