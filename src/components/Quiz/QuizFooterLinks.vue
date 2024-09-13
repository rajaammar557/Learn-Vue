<script setup>

import { RouterLink } from 'vue-router'
import { state } from "@/stores/quizStore";

</script>

<template>
    <div>
        <h4>{{ state.name }}</h4>
        <button @click="state.name = 'A new quiz'">Click</button>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li>
                <RouterLink to="/contact">Contant us</RouterLink>
            </li>
        </ul>
    </div>
</template>