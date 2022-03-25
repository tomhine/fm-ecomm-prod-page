<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import CartIcon from "./icons/CartIcon.vue";
import { cart } from "../store/cart";
import Button from "./Button.vue";
import Backdrop from "./Backdrop.vue";
import CartInfo from "./CartInfo.vue";
import FadeInOutTransition from "./FadeInOutTransition.vue";

const show = ref(false);

const closeMenuOnEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && show.value) {
    show.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", closeMenuOnEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", closeMenuOnEscape);
});
</script>

<template>
  <Backdrop v-if="show" class="z-10" @click="show = false" />
  <div class="lg:relative">
    <button type="button" name="cart button" class="relative" @click="show = !show">
      <CartIcon
        class="text-neutral-darkgrayblue hover:text-neutral-darkblue"
        :class="{ 'text-neutral-darkblue': show }"
      />
      <span
        v-if="cart > 0"
        class="absolute -top-2 -right-2 rounded-full bg-brand-orange px-2 text-xxs font-bold text-white"
        >{{ cart }}</span
      >
    </button>
    <div
      v-show="show"
      class="absolute right-2 top-20 z-20 flex h-64 w-[360px] flex-col rounded-xl bg-white shadow-2xl lg:top-12 lg:-right-40"
    >
      <div class="flex h-17 w-full items-center border-b px-8">
        <h1 class="text-xl font-bold text-neutral-darkblue">Cart</h1>
      </div>
      <div class="flex h-[188px] flex-col gap-6 p-6">
        <FadeInOutTransition>
          <div v-if="cart < 1" class="flex h-full w-full items-center justify-center">
            <p class="font-bold text-neutral-darkgrayblue">Your cart is empty.</p>
          </div>
        </FadeInOutTransition>
        <template v-if="cart >= 1">
          <FadeInOutTransition>
            <CartInfo />
          </FadeInOutTransition>
        </template>
      </div>
    </div>
  </div>
</template>
