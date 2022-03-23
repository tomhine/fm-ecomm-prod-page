<script setup lang="ts">
import Logo from "./icons/Logo.vue";
import Nav from "./Navigation/Nav.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CartMenu from "./CartMenu.vue";
import { openMobileNav } from "../store/mobileNav";
</script>

<template>
  <header class="flex h-17 w-full items-center justify-center lg:h-28">
    <div
      class="flex h-full w-full items-center justify-between px-6 lg:max-w-6xl lg:border-b-2 lg:px-0"
    >
      <div class="flex h-full items-center gap-4 lg:gap-12">
        <button class="lg:hidden" @click="openMobileNav">
          <MenuIcon />
        </button>
        <Logo />
        <Nav />
      </div>
      <div class="flex items-center gap-6 lg:gap-10">
        <CartMenu />
        <div class="cursor-pointer rounded-full p-0.5 hover:bg-brand-orange">
          <img src="/images/image-avatar.png" alt="avatar profile image" class="h-8 lg:h-12" />
        </div>
      </div>
    </div>
  </header>
</template>
