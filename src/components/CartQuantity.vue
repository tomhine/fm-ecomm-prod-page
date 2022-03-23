<script setup lang="ts">
import { ref } from "vue";
import CartIcon from "./icons/CartIcon.vue";
import { cart, clearCart } from "../store/cart";
import DeleteIcon from "./icons/DeleteIcon.vue";
import Button from "./Button.vue";
import Backdrop from "./Backdrop.vue";

const show = ref(false);
</script>

<template>
  <Backdrop v-if="show" class="z-10" @click="show = false" />
  <div class="lg:relative">
    <button type="button" class="relative" @click="show = !show">
      <CartIcon class="text-gray-600 hover:text-gray-900" />
      <span
        v-if="cart > 0"
        class="absolute -top-2 -right-2 rounded-full bg-brand-orange px-2 text-xxs font-bold text-white"
        >{{ cart }}</span
      >
    </button>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="show"
        class="absolute right-2 top-20 z-20 flex h-64 w-[360px] flex-col rounded-xl bg-white shadow-2xl lg:top-12 lg:-right-40"
      >
        <div class="flex h-17 w-full items-center border-b px-8">
          <h1 class="text-xl font-bold text-neutral-darkblue">Cart</h1>
        </div>
        <div class="flex h-[188px] flex-col gap-6 p-6">
          <div v-if="cart < 1" class="flex h-full w-full items-center justify-center">
            <p class="font-bold text-neutral-darkgrayblue">Your cart is empty.</p>
          </div>
          <template v-else>
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
                  <span class="text-base text-neutral-darkblue">${{ 125 * cart }}.00</span>
                </p>
              </div>
              <button type="button" @click="clearCart">
                <DeleteIcon />
              </button>
            </div>
            <Button>Checkout</Button>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
