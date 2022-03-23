<script setup lang="ts">
import Backdrop from "../Backdrop.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import { mobileNav, closeMobileNav } from "../../store/mobileNav";
const links = ["Collections", "Men", "Women", "About", "Contact"];
</script>

<template>
  <transition
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <Backdrop class="bg-black/70 lg:hidden" v-if="mobileNav.isOpen" @click="closeMobileNav" />
  </transition>
  <transition
    enter-active-class="transition duration-00"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-200"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      class="absolute top-0 left-0 h-screen w-2/3 space-y-8 bg-white p-8 lg:hidden"
      v-if="mobileNav.isOpen"
    >
      <button @click="closeMobileNav">
        <CloseIcon class="text-neutral-darkgrayblue" />
      </button>
      <nav>
        <ul class="space-y-4">
          <li v-for="link in links" class="text-xl font-bold text-neutral-darkblue">{{ link }}</li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
