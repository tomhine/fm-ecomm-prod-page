<template>
  <button
    class="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-brand-orange font-semibold text-white hover:opacity-70"
    @click="$emit('buttonClick')"
  >
    <slot />
  </button>
</template>
