<script setup>
import TeamHeader from "@/components/teams/TeamHeader.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import TeamFooter from "@/components/teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";
import Model from "@/components/Model.vue"; 
import { ref } from "vue";

let team = useTeamStore();
team.fill();

let showModel = ref(false);

</script>
<template>
    <TeamHeader @open="showModel = true" />
    <div class="place-self-center flex flex-col gap-y-3">
        <TeamMembers />
    </div>
    <TeamFooter />
    <Model :show="showModel" @close="showModel = false" />
</template>
