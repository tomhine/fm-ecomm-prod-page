<script setup lang="ts">
import Logo from "./icons/Logo.vue";
import Nav from "./Navigation/Nav.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CartQuantity from "./CartQuantity.vue";
</script>

<template>
  <header class="w-full h-17 lg:h-28 flex items-center justify-center">
    <div
      class="w-full lg:max-w-6xl h-full flex items-center justify-between border-b-2 px-6 lg:px-0"
    >
      <div class="flex items-center gap-4 lg:gap-12 h-full">
        <MenuIcon />
        <Logo />
        <Nav />
      </div>
      <div class="flex items-center gap-6 lg:gap-10">
        <CartQuantity />
        <div class="p-0.5 rounded-full hover:bg-brand-orange cursor-pointer">
          <img src="/images/image-avatar.png" alt="avatar profile image" class="h-8 lg:h-12" />
        </div>
      </div>
    </div>
  </header>
</template>
