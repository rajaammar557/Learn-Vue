<script setup>

defineProps({
    team: Object,
})
</script>

<template>
    <header class="flex justify-between">
        <div>
            <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400 dark:bg-green-700 dark:hover:bg-green-800 dark:disabled:bg-gray-600"
                :disabled="team.members.length === team.spots">Add Member ({{ team.spots - team.members.length }} Spots
                Left)</button>
        </div>
        <div>
            <div class="inline-flex items-center text-3xl relative">
                <h3 class="dark:text-white">{{ team.name }} Team</h3>
                <div
                    class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2 dark:bg-green-600">
                    {{ team.spots }}</div>
            </div>
        </div>
    </header>
</template>