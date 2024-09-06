import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },

    template: `
        <section class='mb-4' v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length }})</span> </h2>
            <div class="flex gap-2 mt-4 mb-3">
                <button @click="currentTag = tag" v-for="tag in tags"
                class="border rounded-md py-1 px-2 text-xs"
                :class="{'border-blue-500 text-blue-500': tag === currentTag}">{{ tag }}</button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600 rounded-md">
                <assignment v-for="assignment in filterAssignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>
    `,

    data() {
        return {
            currentTag: 'all'
        }
    },

    props: {
        assignments: Array,
        title: String
    },
    computed: {
        filterAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return new Set(['all', ...this.assignments.map(a => a.tag)]);
        }
    },
}