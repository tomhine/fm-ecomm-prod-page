<script setup lang="ts">
import CartIcon from "./icons/CartIcon.vue";
import { cart } from "../store/cart";
</script>

<template>
  <div class="relative">
    <CartIcon class="text-gray-600 hover:text-gray-900" />
    <span
      class="absolute bg-brand-orange text-white text-xxs font-bold px-2 rounded-full -top-2 -right-2"
      >{{ cart.value }}</span
    >
  </div>
</template>
