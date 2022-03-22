<script setup lang="ts">
import MinusIcon from "./icons/MinusIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import { count, decrement, increment } from "../store/cart";
</script>

<template>
  <div
    class="flex h-14 w-full items-center justify-between gap-4 rounded-lg bg-neutral-lightgrayblue"
  >
    <button
      type="button"
      @click="decrement"
      class="flex h-14 w-14 items-center justify-center text-brand-orange"
    >
      <MinusIcon />
    </button>
    <p class="font-bold">{{ count.value }}</p>
    <button
      type="button"
      @click="increment"
      class="flex h-14 w-14 items-center justify-center text-brand-orange"
    >
      <PlusIcon />
    </button>
  </div>
</template>
