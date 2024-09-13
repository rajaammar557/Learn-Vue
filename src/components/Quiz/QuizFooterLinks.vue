<script setup>

import { inject } from 'vue'
import { RouterLink } from 'vue-router'

let quiz = inject('quiz')

</script>

<template>
    <div>
        <h4>{{ quiz.name }}</h4>
        <ul>
            <li><a href="#">Get a Job</a></li>
            <li>
                <routerLink to="/contact">Contant us</routerLink>
            </li>
        </ul>
    </div>
</template>