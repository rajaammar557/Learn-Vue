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
            assignments: [
                { id: 1, name: "Finish project", complete: true, },
                { id: 2, name: "Read chapter 3", complete: false, },
                { id: 3, name: "Do their homework", complete: false, },
                { id: 4, name: "Test Yourslef", complete: false, },
            ],
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
    methods: {

        handleAdd(newAssignment) {
            console.log('New Assignment:', newAssignment);
            // Handle the new assignment here
        },
        add(name) {
            console.log(name);
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
            })
        }
    },
}