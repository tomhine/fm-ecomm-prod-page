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
  <div class="flex flex-col items-center gap-4 w-full lg:w-[445px]">
    <div class="relative h-75 w-full lg:h-full lg:w-[445px]">
      <img
        :src="`/images/image-product-${currentImage}.jpg`"
        alt="shoes"
        class="h-full w-full object-cover lg:rounded-2xl"
      />
      <div
        class="lg:hidden absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-2"
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
    <div class="hidden lg:flex items-center gap-8">
      <div v-for="n in 4">
        <div
          class="rounded-xl border-2 border-transparent"
          :class="{
            'border-brand-orange': n === currentImage,
            'hover-opacity-60 cursor-pointer': n !== currentImage,
          }"
          @click="currentImage = n"
        >
          <img
            :src="`/images/image-product-${n}.jpg`"
            alt="shoes"
            class="rounded-xl hover:opacity-60"
            :class="{
              'opacity-30 hover:opacity-30': n === currentImage,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
