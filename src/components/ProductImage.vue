<script setup lang="ts">
import { ref } from "vue";
import PreviousIcon from "./icons/PreviousIcon.vue";
import NextIcon from "./icons/NextIcon.vue";
import { openLightBox } from "../store/lightBox";

const props = defineProps({
  lightBox: { type: Boolean, default: false },
  imageNumber: Number,
});

const currentImage = ref(props.imageNumber || 1);
const prevImage = () =>
  currentImage.value - 1 < 1 ? (currentImage.value = 4) : currentImage.value--;
const nextImage = () =>
  currentImage.value + 1 > 4 ? (currentImage.value = 1) : currentImage.value++;

const imageClick = () => {
  if (window.innerWidth < 1024) return;
  openLightBox(currentImage.value);
};
</script>

<template>
  <div class="flex w-full flex-col items-center gap-4 lg:w-[445px]">
    <div
      class="relative h-75 w-full lg:h-full lg:w-[445px]"
      @click="imageClick"
    >
      <img
        :src="`/images/image-product-${currentImage}.jpg`"
        alt="shoes"
        class="h-full w-full object-cover lg:rounded-2xl"
        :class="{
          'cursor-zoom-in': !props.lightBox,
        }"
      />
      <div
        class="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-2 lg:w-[500px] lg:-translate-x-7 lg:px-0"
        :class="{ 'lg:hidden': !props.lightBox }"
      >
        <button
          type="button"
          aria-label="previous image"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-white lg:h-14 lg:w-14"
          :class="{ 'lg:hover:text-brand-orange': props.lightBox }"
          @click="prevImage"
        >
          <PreviousIcon />
        </button>
        <button
          type="button"
          aria-label="next image"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-white lg:h-14 lg:w-14"
          :class="{ 'lg:hover:text-brand-orange': props.lightBox }"
          @click="nextImage"
        >
          <NextIcon />
        </button>
      </div>
    </div>
    <div class="hidden items-center gap-8 lg:flex">
      <div v-for="n in 4">
        <div
          class="relative rounded-xl border-2 border-transparent"
          :class="{
            'border-brand-orange': n === currentImage,
            'cursor-pointer': n !== currentImage,
          }"
          @click="currentImage = n"
        >
          <img
            :src="`/images/image-product-${n}-thumbnail.jpg`"
            alt="shoes"
            class="rounded-lg"
          />
          <div
            class="absolute top-0 left-0 z-10 h-full w-full rounded-lg bg-white opacity-0"
            :class="{
              'hover:opacity-40': n !== currentImage,
              'opacity-70': n === currentImage,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
