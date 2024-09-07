import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template: `
        <section class='mb-4 w-64' v-show="assignments.length">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length }})</span>
                </h2>
                <button class="font-bold hover:text-blue-600" v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"></assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 rounded-md">
                <assignment v-for="assignment in filterAssignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
            <slot></slot>
        </section>
    `,

    data() {
        return {
            currentTag: 'all',
        }
    },
    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
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