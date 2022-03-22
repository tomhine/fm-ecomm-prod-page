<script setup lang="ts">
import { ref } from "vue";
import PreviousIcon from "./icons/PreviousIcon.vue";
import NextIcon from "./icons/NextIcon.vue";

const currentImage = ref(1);
const prevImage = () =>
  currentImage.value - 1 < 1 ? (currentImage.value = 4) : currentImage.value--;
const nextImage = () =>
  currentImage.value + 1 > 4 ? (currentImage.value = 1) : currentImage.value++;
</script>

<template>
  <div class="relative h-75 w-full">
    <img
      :src="`/images/image-product-${currentImage}.jpg`"
      alt="shoes"
      class="h-full w-full object-cover"
    />
    <div
      class="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-2"
    >
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        @click="prevImage"
      >
        <PreviousIcon />
      </button>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        @click="nextImage"
      >
        <NextIcon />
      </button>
    </div>
  </div>
</template>
