import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },
    template: `
    <assignment-list :assignments="filters.inPrograss" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

    <form @submit.prevent="add">
        <div class="border border-gray-600 rounded-md mt-5 text-black">
            <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
            <button class="bg-blue-800 py-2 px-4 border-l text-gray-200">Add</button>
        </div>
    </form>
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: "Finish project", complete: true, },
                { id: 2, name: "Read chapter 3", complete: false, },
                { id: 3, name: "Do their homework", complete: false, },
                { id: 4, name: "Test Yourslef", complete: false, },
                { id: 5, name: "Read a book", complete: false, },
                { id: 6, name: "Complete their homework", complete: false, },
            ],

            newAssignment: '',
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
        add(e) {
            e.preventDefault();
            this.assignments.push({
                id: this.newAssignment.length + 1,
                name: this.newAssignment,
                complete: false,
            }),

                this.newAssignment = ''
        }
    },
}