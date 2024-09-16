<script setup>
defineProps({
    show: Boolean
})
</script>

<template>
    <div v-if="show" class="fixed inset-0 bg-black/70 flex items-center justify-center">
        <div class="bg-white text-black dark:bg-gray-800 dark:text-white w-9/12 max-w-[500px] p-2 rounded">
            <div>
                <header>
                    <slot name="header">Default header</slot>
                </header>
            </div>
    
            <div>
                <slot>Default Body</slot>
            </div>
    
            <div>
                <footer class="mt-3 border-t pt-1 dark:border-gray-600">
                    <slot name="footer">
                        <button @click="$emit('close')" class="text-sm px-3 py-1 mt-1 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 transition-all">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </div>
    
</template>