import { reactive } from "vue";

const cart = reactive({ value: 0 });

const addToCart = (quantity: number) => {
  cart.value += quantity;
};

export { cart, addToCart };
