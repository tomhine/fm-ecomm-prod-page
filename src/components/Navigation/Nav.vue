<script setup lang="ts">
import NavItem from "./NavItem.vue";

const links = ["Collections", "Men", "Women", "About", "Contact"];
</script>

<template>
  <nav class="hidden h-full lg:flex">
    <ul class="flex h-full items-center gap-6 text-sm text-gray-500">
      <NavItem v-for="link in links">{{ link }}</NavItem>
    </ul>
  </nav>
</template>
