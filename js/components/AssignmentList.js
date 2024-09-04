import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },

    template: `
        <section class='mb-4' v-show="assignments.length">
        <h2 class="font-bold mb-2">{{ title }}</h2>
        <ul class="border border-gray-600 divide-y divide-gray-600 rounded-md">
        <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
        </ul>
    </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}