import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <assignment-list :assignments="filters.inPrograss" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        <assignment-create @add="add"></assignment-create>

    `,

    data() {
        return {
            assignments: [],
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