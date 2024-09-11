import { ref, watch } from 'vue';

export function useStorage(key, value = null) {

    let storeValue = localStorage.getItem(key);

    if (storeValue) {
        value = ref(storeValue);
    } else {
        value = ref(value);

        write();
    }

    watch(value, write());

    function write() {
        if (value.value === '' || value.value === null) {

            localStorage.removeItem(key);
        } else {

            localStorage.setItem(key, value.value);
        }
    }
    return value;
}