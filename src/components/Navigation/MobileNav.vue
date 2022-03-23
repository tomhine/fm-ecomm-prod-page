<script setup lang="ts">
import Backdrop from "../Backdrop.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import { mobileNav, closeMobileNav } from "../../store/mobileNav";
const links = ["Collections", "Men", "Women", "About", "Contact"];
</script>

<template>
  <Backdrop class="bg-black/70" v-if="mobileNav.isOpen" @click="closeMobileNav" />
  <div class="absolute top-0 left-0 h-screen w-2/3 space-y-8 bg-white p-8" v-if="mobileNav.isOpen">
    <button @click="closeMobileNav">
      <CloseIcon class="text-neutral-darkgrayblue" />
    </button>
    <nav>
      <ul class="space-y-4">
        <li v-for="link in links" class="text-xl font-bold text-neutral-darkblue">{{ link }}</li>
      </ul>
    </nav>
  </div>
</template>
