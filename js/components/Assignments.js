import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inPrograss" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
                <assignment-list :assignments="filters.completed"
                title="Completed" 
                can-toggle
                @toggle="showCompleted = !showCompleted"></assignment-list>
            </div>
        </section>

    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },

    computed: {

        filters() {
            return {
                inPrograss: this.assignments.filter(assignments => !assignments.complete),
                completed: this.assignments.filter(assignments => assignments.complete),
            }
        }
    },
    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            })
    },
    methods: {

        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
            })
        }
    },
}