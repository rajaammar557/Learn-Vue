export default {
    template: `<button class="px-5 py-3 bg-gray-300 border-1 rounded hover:bg-gray-400 disabled:cursor-not-allowed" :disabled="processing"><slot /></button>`,
    data() {
        return {
            processing: false,
        }
    }
}