<script setup lang="ts"></script>

<template>
  <Transition
    enter-active-class="transition duration-1000"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-1000"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot></slot>
  </Transition>
</template>
