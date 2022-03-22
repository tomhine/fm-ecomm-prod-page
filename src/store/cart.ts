import { reactive } from "vue";

const product = { name: "Fall Limited Edition Sneakers", price: 125 };

const count = reactive({ value: 0 });
const cart = reactive({ product, quantity: 0 });

const decrement = () => {
  if (count.value - 1 < 1) return;
  count.value--;
};
const increment = () => count.value++;

const addToCart = (quantity: number = 1) => {
  cart.quantity = quantity;
};

export { count, cart, decrement, increment, addToCart };
