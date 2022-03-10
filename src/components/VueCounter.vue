<script setup lang="ts">
import { count, take, add } from "../store/cart";
</script>

<template>
  <div class="flex items-center gap-4">
    <button @click="take">-</button>
    <pre>{{ count.value }}</pre>
    <button @click="add">+</button>
  </div>
</template>
