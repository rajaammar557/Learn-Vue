import { reactive } from "vue";

export let counter = reactive({
    // states
    count: 0,

    // actions
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    }
});