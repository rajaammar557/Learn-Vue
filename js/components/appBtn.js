export default {
    template: `<button
    :class="{
    'px-6 py-2 text-sm font-semibold border-1 rounded disabled:cursor-not-allowed': true,
    'bg-blue-600 hover:bg-blue-800' : type == 'primary',
    'bg-purple-200 hover:bg-purple-300' : type == 'secondary',
    'bg-gray-300 hover:bg-gray-400' : type == 'muted',
    }"
    :disabled="processing">
    <slot />
    </button>`,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        },
    },

}