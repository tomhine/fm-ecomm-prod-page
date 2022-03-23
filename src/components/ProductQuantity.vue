<script setup lang="ts">
import { ref } from "vue";
import CartIcon from "../components/icons/CartIcon.vue";
import MinusIcon from "./icons/MinusIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import { addToCart } from "../store/cart";
import Button from "./Button.vue";

const count = ref(0);

const decrement = () => {
  if (count.value - 1 < 0) return;
  count.value--;
};

const increment = () => count.value++;

const addItemsToCart = () => {
  addToCart(count.value);
  count.value = 0;
};
</script>

<template>
  <div
    class="grid h-14 w-full grid-cols-3 items-center justify-items-center rounded-lg bg-neutral-lightgrayblue lg:w-48"
  >
    <button
      type="button"
      @click="decrement"
      class="flex h-14 w-14 items-center justify-center text-brand-orange"
      :class="{ 'hover:opacity-60': count >= 1, 'cursor-default': count < 1 }"
      :disabled="count < 1"
    >
      <MinusIcon />
    </button>
    <p class="flex w-10/12 justify-center font-bold">{{ count }}</p>
    <button
      type="button"
      @click="increment"
      class="flex h-14 w-14 items-center justify-center text-brand-orange hover:opacity-60"
    >
      <PlusIcon />
    </button>
  </div>
  <Button @button-click="addItemsToCart">
    <CartIcon color="white" />
    <p class="text-white">Add to cart</p>
  </Button>
</template>
