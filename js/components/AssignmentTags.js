export default {
    template: `
        <div class="flex gap-2 mt-4 mb-3">
            <button @click="$emit('change', tag)"
            v-for="tag in tags"
            class="border rounded-md py-1 px-2 text-xs"
            :class="{'border-blue-500 text-blue-500': tag === currentTag}">{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },
    
    computed: {
        
        tags() {
            return new Set(['all', ...this.initialTags]);
        }
    },
}