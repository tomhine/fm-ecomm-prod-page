<script setup lang="ts">
import ProductImage from "./ProductImage.vue";
import Backdrop from "./Backdrop.vue";
import { lightBox, closeLightBox } from "../store/lightBox";
import CloseIcon from "./icons/CloseIcon.vue";
</script>

<template>
  <transition
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <Backdrop
      class="z-10 hidden bg-black/70 lg:block"
      v-if="lightBox.isOpen"
      @click="closeLightBox"
    />
  </transition>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div
      class="absolute top-24 right-1/2 z-20 mx-auto hidden translate-x-1/2 space-y-3 lg:block"
      v-if="lightBox.isOpen"
    >
      <div class="flex w-full items-center justify-end">
        <button type="button" @click="closeLightBox">
          <CloseIcon class="cursor-pointer text-white hover:text-brand-orange" />
        </button>
      </div>
      <ProductImage :light-box="true" />
    </div>
  </transition>
</template>
