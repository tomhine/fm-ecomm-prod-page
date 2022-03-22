import { ref } from "vue";

const startQuantity = localStorage.getItem("cartQuantity")
  ? Number(localStorage.getItem("cartQuantity"))
  : 0;

const cart = ref(startQuantity);

const addToCart = (quantity: number) => {
  cart.value += quantity;
  localStorage.setItem("cartQuantity", String(cart.value));
};

export { cart, addToCart };
