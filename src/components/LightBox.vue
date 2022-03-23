<script setup lang="ts">
import ProductImage from "./ProductImage.vue";
import Backdrop from "./Backdrop.vue";
import { lightBox, closeLightBox } from "../store/lightBox";
import CloseIcon from "./icons/CloseIcon.vue";
</script>

<template>
  <Backdrop
    class="z-10 hidden bg-black/70 lg:block"
    v-if="lightBox.isOpen"
    @click="closeLightBox"
  />
  <div
    class="absolute top-24 right-1/2 z-20 mx-auto hidden translate-x-1/2 space-y-3 lg:block"
    v-if="lightBox.isOpen"
  >
    <div class="flex w-full items-center justify-end">
      <button type="button" @click="closeLightBox">
        <CloseIcon class="cursor-pointer text-white hover:text-brand-orange" />
      </button>
    </div>
    <ProductImage />
  </div>
</template>
