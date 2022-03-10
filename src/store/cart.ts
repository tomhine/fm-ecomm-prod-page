import { reactive } from "vue";

const count = reactive({ value: 0 });

const take = () => count.value--;
const add = () => count.value++;

export { count, take, add };
