<script setup>
import Counter from "../components/Counter.vue";
import Button from "../components/Button.vue";
import CartIcon from "../components/icons/CartIcon.vue";
</script>

<template>
  <Counter />
  <Button>
    <CartIcon color="white" />
    <p class="text-white">Add to cart</p>
  </Button>
</template>
