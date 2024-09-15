<script setup>

import TeamHeader from "@/components/teams/TeamHeader.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import TeamFooter from "@/components/teams/TeamFooter.vue";
import team from '@/team.json';
console.log(team);
</script>
<template>

    <TeamHeader :team="team" />
    <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers :team="team" />
    </div>
    <TeamFooter :team="team"/>
</template>
