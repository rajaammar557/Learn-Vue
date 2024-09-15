<script setup>
import TeamMember from "./TeamMember.vue";
import { useTeamStore } from "@/stores/TeamStore";
let team = useTeamStore();
</script>
<template>
    <table class="table-fixed border-spacing-2 border-separate">
        <thead>
            <th class="text-left px-6 py-2 dark:text-gray-300">Name</th>
            <th class="text-left px-6 py-2 dark:text-gray-300">Email</th>
            <th class="text-left px-6 py-2 dark:text-gray-300">Status</th>
        </thead>

        <tbody>
            <TeamMember v-for="member in team.members" :name="member.name" :email="member.email" :status="member.status"
                :key="member.id" />
        </tbody>
    </table>
    <p class="text-right text-gray-600 italic dark:text-gray-400" v-show="!team.remainingSpots">There
        are no remaining team spots. Upgrade to add
        more.</p>
</template>