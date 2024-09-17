<script setup>
import TeamHeader from "@/components/teams/TeamHeader.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import TeamFooter from "@/components/teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();
team.fill();
</script>
<template>
    <TeamHeader/>

    <div class="place-self-center flex flex-col gap-y-3">
        <TeamMembers />
    </div>
    <TeamFooter />
    
</template>
