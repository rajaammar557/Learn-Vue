<script setup>

import { useTeamStore } from "@/stores/TeamStore";
import Model from "@/components/Model.vue";
import { ref } from "vue";

let team = useTeamStore();
let showModel = ref(false);


</script>
<template>
    <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400 dark:bg-green-700 dark:hover:bg-green-800 dark:disabled:bg-gray-600"
        :disabled="!team.remainingSpots"
        @click="showModel = true">Add Member ({{ team.remainingSpots }} Spots
        Left)</button>
    <Teleport to="body">
        <Model :show="showModel" @close="showModel = false">
            <template #default>
                <p>Add member to your team?</p>
                <form @submit.prevent class="mt-5">
                    <div class="flex gap-2">
                        <input type="email" class="dark:bg-transparent flex-1" placeholder="Enter your email">
                        <button>Add</button>
                    </div>
                </form>
            </template>
        </Model>
    </Teleport>
</template>