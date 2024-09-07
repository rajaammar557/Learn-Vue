export default {
    template: `
        <div class="bg-gray-700 border rounded-lg border-gray-600 p-4">
            <h1 class="font-bold"" v-if="$slots.heading"> <slot name="heading" /> </h1>
            <slot />
        </div>
    `,
}