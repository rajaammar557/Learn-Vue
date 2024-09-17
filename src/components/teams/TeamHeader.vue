<script setup>

import { useTeamStore } from "@/stores/TeamStore";
import AddMemberModel from "@/components/teams/AddMemberModel.vue";

let team = useTeamStore();
</script>

<template>
    <header class="flex justify-between">
        <div>
            <AddMemberModel />
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