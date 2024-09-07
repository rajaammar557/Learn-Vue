export default {
    template: `
        <form @submit.prevent="add">
            <div class="inline-flex mt-5 text-black border border-blue-600 rounded">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
                <button class="text-blue-600 text-sm font-semibold py-2 px-4">ADD</button>
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