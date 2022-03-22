<script setup>
defineProps({
  type: String,
  onclick: () => {},
});
</script>

<template>
  <button
    :type="type"
    class="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-brand-orange font-semibold text-white"
    :@click="onClick"
  >
    <slot></slot>
  </button>
</template>
