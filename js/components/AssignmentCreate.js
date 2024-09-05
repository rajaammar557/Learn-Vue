export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 rounded-md mt-5 text-black">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
                <button class="bg-blue-800 py-2 px-4 border-l text-gray-200">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    },
}