<script setup>
defineProps({
    name: String,
    email: String,
    status: String,
})
</script>

<template>
    <tr class="bg-gray-100 dark:bg-gray-800 px-12">
        <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4 dark:text-white">
            <img :src="'https://i.pravatar.cc/50?u=' + email" alt="" class="rounded-full">
            {{ name }}
        </td>
        <td class="text-gray-500 px-6 py-4 dark:text-gray-400">{{ email }}</td>
        <td class="px-6 py-4">
            <button class="text-green-400 text-xl dark:text-green-500">{{ status }}</button>
        </td>
    </tr>
</template>