import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },
    template: `
    <assignment-list :assignments="filters.inPrograss" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: "Finish project",
                    complete: true,
                },
                {
                    id: 2,
                    name: "Read chapter 3",
                    complete: false,
                },
                {
                    id: 3,
                    name: "Complete their homework",
                    complete: false,
                },
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
    }
}