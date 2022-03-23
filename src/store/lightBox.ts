import { reactive } from "vue";

export const lightBox = reactive({ isOpen: false });

export const openLightBox = () => (lightBox.isOpen = true);

export const closeLightBox = () => (lightBox.isOpen = false);
