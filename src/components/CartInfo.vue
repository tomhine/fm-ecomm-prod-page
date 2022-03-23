<script setup lang="ts">
import { cart, clearCart } from "../store/cart";
import DeleteIcon from "./icons/DeleteIcon.vue";
import Button from "./Button.vue";
</script>

<template>
  <div class="flex items-center justify-between">
    <img
      src="/images/image-product-1-thumbnail.jpg"
      alt="shoes thumbnail"
      class="h-[50px] w-[50px] rounded-lg"
    />
    <div class="flex flex-col">
      <p class="text-neutral-darkgrayblue">Fall Limited Edition Sneakers</p>
      <p class="text-sm text-neutral-darkgrayblue">
        $125.00 x {{ cart }}
        <span class="text-base text-neutral-darkblue font-bold ml-2">${{ 125 * cart }}.00</span>
      </p>
    </div>
    <button type="button" @click="clearCart">
      <DeleteIcon />
    </button>
  </div>
  <Button>Checkout</Button>
</template>
