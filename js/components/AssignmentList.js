import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template: `
        <section class='mb-4' v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length }})</span> </h2>
            <assignment-tags
            :initial-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event"></assignment-tags>
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