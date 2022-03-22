<script setup lang="ts">
import NavItem from "./NavItem.vue";

const links = ["Collections", "Men", "Women", "About", "Contact"];
</script>

<template>
  <nav class="hidden lg:flex h-full">
    <ul class="flex items-center gap-6 h-full text-gray-500 text-sm">
      <NavItem v-for="link in links">{{ link }}</NavItem>
    </ul>
  </nav>
</template>
